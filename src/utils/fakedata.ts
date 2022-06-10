import { HttpClient } from '@angular/common/http';
import { getFirestore } from 'firebase/firestore';
import { Comment } from 'src/app/interfaces/comment';
import { Group } from 'src/app/interfaces/group';
import { Page } from 'src/app/interfaces/page';
import { Post } from 'src/app/interfaces/post';
import { Profile } from 'src/app/interfaces/profile';
import { Role } from 'src/app/interfaces/role';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommentService } from 'src/app/services/firestores/comment.service';
import { GroupService } from 'src/app/services/firestores/group.service';
import { PageService } from 'src/app/services/firestores/page.service';
import { PostService } from 'src/app/services/firestores/post.service';
import { ProfileService } from 'src/app/services/firestores/profile.service';
import { RoleService } from 'src/app/services/firestores/role.service';

const getJson = (http: HttpClient, file: string) =>
  http.get<any[]>(`assets/json/${file}.json`);

const fakeUser = async (
  auth: AuthService,
  profile: ProfileService,
  http: HttpClient
) => {
  await createUser(auth, http).then(async (res) => {
    setTimeout(async () => await fakeProfile(profile, http, res), 2000);
  });
};

const createUser = async (auth: AuthService, http: HttpClient) => {
  const ids = [];
  getJson(http, 'User').subscribe((vals) => {
    vals.forEach(async (val) => {
      await auth
        .register({ email: val.email, password: '123456' })
        .then(async (res) => {
          if (res.user) {
            ids.push([res.user, val.uid]);
            await auth.setDefault().then(async () => {
              await auth.modifyName(val.displayname);
            });
          }
        });
    });
  });
  return ids;
};

const fakeProfile = async (
  profile: ProfileService,
  http: HttpClient,
  ids: any[]
) => {
  getJson(http, 'Profile').subscribe((vals) => {
    vals.forEach(async (val) => {
      const user = ids.find((x) => x[1] === val.uid);
      if (!user) {
        return;
      }

      const d = val.birthdate.split('/');
      const date = new Date(2001, d[0] - 1, d[1]);
      const gender = val.gender === 'Nam' ? 'M' : 'F';

      const p: Profile = {
        uid: user[0].uid,
        ref: null,
        email: user[0].email,
        emailVerified: user[0].emailVerified,
        displayName: user[0].displayName,
        photoUrl: user[0].photoURL,
        firstName: val.lastName,
        lastName: val.firstname,
        birthdate: date,
        gender,
        backgroundUrl: null,
        friends: [],
        followers: [],
        following: [],
      };
      await profile.setProfile(p).then(() => {
        console.log(`${val.uid} OK`);
      });
    });
  });
};

const fakePage = async (
  page: PageService,
  profile: ProfileService,
  http: HttpClient
) => {
  const users = [];
  getJson(http, 'User').subscribe((vals) => {
    vals.forEach((val) => users.push(val));
  });

  getJson(http, 'Page').subscribe((vals) => {
    vals.forEach(async (val) => {
      const user = users.find((x) => x.uid === val.user_uid);
      const p: Page = {
        uid: null,
        ref: null,
        user: null,
        name: val.name,
        description: val.description,
        photoUrl: null,
        backgroundUrl: null,
        createdDate: new Date(),
        friends: [],
        followers: [],
        following: [],
      };

      await profile
        .where('firstName', '==', user.displayname)
        .then(async (res) => {
          p.user = res.docs[0]?.data();
          // console.log(res.docs[0]?.data());
        });
      await page.add(p);
    });
  });
};

const fakeRole = async (role: RoleService, http: HttpClient) => {
  getJson(http, 'Role').subscribe((vals) => {
    vals.forEach(async (val) => {
      const r: Role = {
        uid: null,
        ref: null,
        name: val.name,
        description: val.description,
      };
      await role.add(r);
    });
  });
};

const fakePost = async (
  post: PostService,
  page: PageService,
  profile: ProfileService,
  http: HttpClient
) => {
  const users = [];
  getJson(http, 'User').subscribe((vals) => {
    vals.forEach((val) => users.push(val));
  });

  const pages = [];
  getJson(http, 'Page').subscribe((vals) => {
    vals.forEach((val) => pages.push(val));
  });

  const comments = [];
  getJson(http, 'Comment').subscribe((vals) => {
    vals.forEach((val) => comments.push(val));
  });

  getJson(http, 'Post').subscribe((vals) => {
    vals.forEach(async (val) => {
      const d = val.createdDate.split('/');
      const date = new Date(2022, d[0] - 1, d[1]);
      const p: Post = {
        uid: null,
        ref: null,
        author: null,
        content: val.content,
        images: [],
        updatedDate: new Date(),
        createdDate: date,
        comments: [],
      };

      const cms = comments.filter((x) => x.post_uid === val.uid);
      cms.forEach(async (cm) => {
        const cd = val.createdDate.split('/');
        const cdate = new Date(2022, cd[0] - 1, cd[1]);
        const c: Comment = {
          uid: null,
          ref: null,
          author: null,
          content: cm.content,
          images: [],
          createdDate: cdate,
          comments: [],
        };
        const user1 = users.find((x) => x.uid === val.user_uid);
        await profile
          .where('firstName', '==', user1.displayname)
          .then((res) => {
            c.author = res.docs[0]?.data();
          });
        p.comments.push(c);
      });

      if (val.user_uid) {
        const user = users.find((x) => x.uid === val.user_uid);
        await profile.where('firstName', '==', user.displayname).then((res) => {
          p.author = res.docs[0]?.data();
        });
      }

      if (val.page_uid) {
        const pageT = pages.find((x) => x.uid === val.page_uid);
        await page
          .where('name', '==', pageT.name)
          .then((res) => (p.author = res.docs[0]?.data()));
      }

      await post.add(p);
    });
  });
};

const fakeGroup = async (
  group: GroupService,
  post: PostService,
  role: RoleService,
  page: PageService,
  profile: ProfileService,
  http: HttpClient
) => {
  const users = [];
  getJson(http, 'User').subscribe((vals) => {
    vals.forEach((val) => users.push(val));
  });

  const pages = [];
  getJson(http, 'Page').subscribe((vals) => {
    vals.forEach((val) => pages.push(val));
  });

  const groups = [];
  getJson(http, 'Group').subscribe((vals) => {
    vals.forEach((val) => groups.push(val));
  });

  const roles = [];
  getJson(http, 'Role').subscribe((vals) => {
    vals.forEach((val) => roles.push(val));
  });

  const members = [];
  getJson(http, 'GroupMember').subscribe((vals) => {
    vals.forEach((val) => members.push(val));
  });

  getJson(http, 'Group').subscribe((vals) => {
    vals.forEach(async (val) => {
      const d = val.createdDate.split('/');
      const date = new Date(2022, d[0] - 1, d[1]);
      const g: Group = {
        uid: null,
        ref: null,
        owner: null,
        name: val.description,
        description: null,
        createdDate: date,
        photoUrl: null,
        backgroundUrl: null,
        members: [],
        posts: [],
      };

      // members.filter((x) => x.group_uid === val.uid).forEach(v => {
      // });

      const user1 = users.find((x) => x.uid === val.owner_uid);
      await profile.where('firstName', '==', user1.displayname).then((res) => {
        g.owner = res.docs[0]?.data();
      });

      await group.add(g);
    });
  });
};

export const loadFake = async (auth: AuthService, http: HttpClient) => {
  const profile = new ProfileService(getFirestore());
  const page = new PageService(getFirestore());
  const role = new RoleService(getFirestore());
  const post = new PostService(getFirestore());
  const group = new GroupService(getFirestore());

  // await fakeUser(auth, profile, http).then(() => {
  //   console.log('Add users succesfull');
  // });
  // await fakePage(page, profile, http).then(() => {
  //   console.log('Add pages succesfull');
  // });
  // await fakeRole(role, http).then(() => {
  //   console.log('Add roles succesfull');
  // });
  // await fakePost(post, page, profile, http).then(() => {
  //   console.log('Add posts succesfull');
  // });
  // await fakeGroup(group, post, role, page, profile, http).then(() => {
  //   console.log('Add groups succesfull');
  // });
};

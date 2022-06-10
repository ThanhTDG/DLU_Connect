/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import {
  ActivatedRoute,
  NavigationExtras,
  Router,
  RoutesRecognized,
} from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit, AfterViewInit {
  ipTitleHint = 'Bạn đang nghĩ về điều gì?';
  ipContentHint = 'Bạn nghĩ gì về điều đó?';

  ngModelTitle = '';
  ngModelContent = '';

  taRows = 16;
  taCols = 20;

  canPost = false;

  imgAvatar = '../../../../assets/icon/default/default-avatar.png';
  imgScopeOption = '../../../../assets/icon/post/create-post/option-public.png';

  imgAddTagImages = '../../../../assets/icon/post/create-post/tag-image.png';
  imgAddTagPeople = '../../../../assets/icon/post/create-post/tag-people.png';
  imgTagImageRemove =
    '../../../../assets/icon/post/comment/button/tag-remove.png';

  userName = 'Người dùng';
  ngStyleCreatePostBtn: any;
  ngStyleTags: any;

  toSendTagImages = '';
  tagImages: Array<string> = [];
  tagImagesBackUp: Array<string> = [];

  currentUrl = '';
  previousUrl = '';
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private camera: Camera
  ) {
    //this.initRouterPath();
  }

  ngAfterViewInit(): void {
    this.getExtras();
    console.log(this.previousUrl + '  after');
  }

  ngOnInit() {
    console.log(this.auth.currentUser);
    this.imgAvatar = this.auth.currentUser.photoURL;
    this.userName = this.auth.currentUser.displayName;

    this.getExtras();
    console.log(this.previousUrl + '  alo');
  }

  initRouterPath() {
    this.currentUrl = this.router.url;
  }

  toBack() {
    this.router.navigateByUrl(this.previousUrl);
  }

  getExtras() {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.previousUrl =
          this.router.getCurrentNavigation().extras.state.prvUrl;
      }
    });
  }
  createPost() {
    if (this.canPost === true) {
      const navigationExtras: NavigationExtras = {
        state: {
          postTitle: this.ngModelTitle,
          postContent: this.ngModelContent,
          postImages: this.toSendTagImages,
        },
      };
      if (this.previousUrl.includes('/')) {
        this.previousUrl = this.previousUrl.slice(1, this.previousUrl.length);
      }
      console.log(this.ngModelTitle);
      console.log(this.ngModelContent);
      console.log(this.toSendTagImages);

      const prvUrl = this.previousUrl;
      this.router.navigateByUrl(prvUrl, navigationExtras);
    }
  }
  onSelectScopeOption(e) {
    if (e.target.value === 'private') {
      this.imgScopeOption =
        '../../../../assets/icon/post/create-post/option-private.png';
    } else {
      this.imgScopeOption =
        '../../../../assets/icon/post/create-post/option-public.png';
    }
  }
  onInputTitle() {
    this.checkToPost();
  }
  onInputContent() {
    this.checkToPost();
  }
  checkToPost() {
    if (this.ngModelTitle !== '' && this.ngModelContent !== '') {
      this.canPost = true;
      this.ngStyleCreatePostBtn = {
        'background-color': 'var(--ion-color-app-green-dark)',
      };
    } else {
      this.canPost = false;
      this.ngStyleCreatePostBtn = {
        'background-color': 'var(--ion-color-app-primary)',
      };
    }
  }
  addTagImage() {
    this.getPhoto();
  }
  getPhoto() {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 300,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: 0,
      saveToPhotoAlbum: false,
      allowEdit: false
    };

    this.camera.getPicture(options).then((imageData) => {
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.tagImagesBackUp.push(base64Image);
      this.passChoseImgaeToDisplay();
      this.ngStyleTags={
        display: "flex"
      };
    }, (err) => {
    });
    // this.tagImagesBackUp.push(
    //   '../../../../assets/icon/default/default-post-bd-image.png'
    // );
    // this.tagImagesBackUp.push(
    //   '../../../../assets/icon/default/default-post-bd-image.png'
    // );
    // this.tagImagesBackUp.push(
    //   '../../../../assets/icon/default/default-post-bd-image.png'
    // );
    // this.passChoseImgaeToDisplay();
    // this.ngStyleTags = {
    //   display: 'flex',
    // };
  }
  passChoseImgaeToDisplay() {
    this.clearTagImages();
    this.toSendTagImages = '';
    this.tagImagesBackUp.forEach((element) => {
      this.tagImages.push(element);
      this.toSendTagImages += element + '!1409!';
    });
  }
  clearTagImages() {
    this.tagImages.splice(0, this.tagImages.length);
  }
  removeTagImage(image: string) {
    let index = -1;
    for (let i = 0; i < this.tagImagesBackUp.length; i++) {
      if (this.tagImagesBackUp[i] === image) {
        index = i;
        break;
      }
    }
    this.tagImagesBackUp.splice(index, 1);
    this.passChoseImgaeToDisplay();
  }
}

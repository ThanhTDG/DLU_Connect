/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CommonModule } from '@angular/common';
import {SearchBarComponent} from './home/search-bar/search-bar.component';

import {ShortViewObjectComponent} from './home/short-view-object/short-view-object.component';
import {ToCreatePostComponent} from './to-create-post/to-create-post.component';
import {ShortPostComponent} from './short-post/short-post.component';
import {FullPostComponent} from './full-post/full-post.component';
import { SearchBarAdvanceComponent } from './search-page/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { HotSearchComponent } from './search-page/hot-search/hot-search.component';
import { NearlySearchComponent } from './search-page/nearly-search/nearly-search.component';
import { SearchOptionsComponent } from './search-options/search-options.component';
import { NotificationItemComponent } from './notification/notification-item/notification-item.component';
import { FollowItemComponent } from './follow/follow-item/follow-item.component';
import { ViewProfileComponent } from './personal/view-profile/view-profile.component';
import { SettingItemComponent } from './personal/setting-item/setting-item.component';
import { CommentComponent } from './post/comment/comment.component';
import { PostOptionButtonComponent } from './post/post-option-button/post-option-button.component';
import { ReplyComponent } from './post/reply/reply.component';
import { IonicModule } from '@ionic/angular';
import { MembersBarComponent } from './group/members-bar/members-bar.component';
import { TeacherProfileComponent } from './department/teacher-profile/teacher-profile.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
      ],
    declarations: [
      NavigationBarComponent,
      SearchBarComponent,
      ShortViewObjectComponent,
      ToCreatePostComponent,
      ShortPostComponent,
      FullPostComponent,
      SearchBarAdvanceComponent,
      HotSearchComponent,
      NearlySearchComponent,
      SearchOptionsComponent,
      NotificationItemComponent,
      FollowItemComponent,
      ViewProfileComponent,
      SettingItemComponent,
      CommentComponent,
      PostOptionButtonComponent,
      ReplyComponent,
      MembersBarComponent,
      TeacherProfileComponent
    ],
    exports: [
      NavigationBarComponent,
      SearchBarComponent,
      ShortViewObjectComponent,
      ToCreatePostComponent,
      ShortPostComponent,
      FullPostComponent,
      SearchBarAdvanceComponent,
      HotSearchComponent,
      NearlySearchComponent,
      SearchOptionsComponent,
      NotificationItemComponent,
      FollowItemComponent,
      ViewProfileComponent,
      SettingItemComponent,
      CommentComponent,
      PostOptionButtonComponent,
      ReplyComponent,
      MembersBarComponent,
      TeacherProfileComponent
    ]
})
export class ComponentsModule{}

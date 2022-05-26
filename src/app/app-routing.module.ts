/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'personal',
    loadChildren: () => import('./pages/personal/personal.module').then( m => m.PersonalPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'follow',
    loadChildren: () => import('./pages/follow/follow.module').then( m => m.FollowPageModule)
  },
  {
    path: 'group',
    loadChildren: () => import('./pages/group/group.module').then( m => m.GroupPageModule)
  },
  {
    path: 'search-page',
    loadChildren: () => import('./pages/sub-pages/search-page/search-page.module').then( m => m.SearchPagePageModule)
  },
  {
    path: 'notification-options-dialog',
    loadChildren: () => import('./components/notification/notification-options-dialog/notification-options-dialog.module').then( m => m.NotificationOptionsDialogPageModule)
  },
  {
    path: 'personal-detail',
    loadChildren: () => import('./pages/sub-pages/personal-detail/personal-detail.module').then( m => m.PersonalDetailPageModule)
  },
  {
    path: 'reaction',
    loadChildren: () => import('./components/post/reaction/reaction.module').then( m => m.ReactionPageModule)
  },
  {
    path: 'create-post',
    loadChildren: () => import('./pages/sub-pages/create-post/create-post.module').then( m => m.CreatePostPageModule)
  },
  {
    path: 'department',
    loadChildren: () => import('./pages/sub-pages/department/department.module').then( m => m.DepartmentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

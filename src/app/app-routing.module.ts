import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create-post-page',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'personal',
    loadChildren: () => import('./pages/personal/personal.module').then(m => m.PersonalPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'follow',
    loadChildren: () => import('./pages/follow/follow.module').then(m => m.FollowPageModule)
  },
  {
    path: 'group',
    loadChildren: () => import('./pages/group/group.module').then(m => m.GroupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'register-final',
    loadChildren: () => import('./pages/register-final/register-final.module').then( m => m.RegisterFinalPageModule)
  },
  {
    path: 'create-post-page',
    loadChildren: () => import('./pages/sub-pages/create-post-page/create-post-page.module').then( m => m.CreatePostPagePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'forgot-password-part2',
    loadChildren: () => import('./pages/forgot-password-part2/forgot-password-part2.module').then( m => m.ForgotPasswordPart2PageModule)
  },
  {
    path: 'forgot-password-final',
    loadChildren: () => import('./pages/forgot-password-final/forgot-password-final.module').then( m => m.ForgotPasswordFinalPageModule)
  },
  {
    path: 'register-part2',
    loadChildren: () => import('./pages/register-part2/register-part2.module').then( m => m.RegisterPart2PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

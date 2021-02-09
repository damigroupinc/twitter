import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tutorial', pathMatch: 'full' },
  { path: 'tutorial', loadChildren: () => import('./tutorial/tutorial.module').then(m => m.TutorialPageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule) },
  { path: 'recover', loadChildren: () => import('./recover/recover.module').then(m => m.RecoverPageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) },
  { path: 'changepass', loadChildren: () => import('./changepass/changepass.module').then(m => m.ChangepassPageModule) },
  { path: 'pictures', loadChildren: () => import('./pictures/pictures.module').then(m => m.PicturesPageModule) },
  { path: 'notifications', loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsPageModule) },
  { path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SigninPageModule) },
  { path: 'signout', loadChildren: () => import('./signout/signout.module').then(m => m.SignoutPageModule) },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

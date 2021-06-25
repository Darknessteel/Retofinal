import { NgModule, Component } from '@angular/core';
import { CommonModule, registerLocaleData, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CanActiveGuard } from './can-active.guard';
import { LandpageComponent } from './landpage/landpage.component';


const routes: Routes =[
  {
    path: '',
    component: LandpageComponent
  }, 
  {
    path: 'login',
    component:LoginComponent
  },{
    path: 'registro',
    component:RegistroComponent
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [CanActiveGuard],
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    component: LoginComponent
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

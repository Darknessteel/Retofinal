import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/shared/service/login.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Buscando Casa',  icon: 'pe-7s-date', class: '' },
    { path: '/profile', title: 'Perfil',  icon:'pe-7s-users', class: '' },
    { path: '/table', title: 'Reservas',  icon:'pe-7s-news-paper', class: '' },
    
    
];

export const ROUTESUSUARIOSC: RouteInfo[] = [
  //{ path: '/dashboard', title: 'Buscando Casa',  icon: 'pe-7s-date', class: '' },
  { path: '/profile', title: 'Perfil', icon: 'pe-7s-users', class: '' },
  { path: '/table', title: 'Resevas', icon: 'pe-7s-news-paper', class: '' },
 
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private service: LoginService) { }

  ngOnInit() {


    let recuperarStorage = JSON.parse( localStorage.getItem("datosSesion"));


 

      if (recuperarStorage.rol == 'Usuario') {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
      } else {
        this.menuItems = ROUTESUSUARIOSC.filter(menuItem => menuItem);
      }

    
    
  }







  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

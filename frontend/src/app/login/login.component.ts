import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/shared/service/auth.service';
import { LoginService } from 'app/shared/service/login.service';
import { Subscriber } from 'rxjs';
import Swal from 'sweetalert2';
import { runInThisContext } from 'vm';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any
  password: any
  respuesta: Usuario



  constructor(private service: LoginService, private router: Router, private authService: AuthService) { }
  routeRedirect= '';
  ngOnInit(): void {


    
    

  }
  login(){
    
    let user=this.username;
    let password=this.password;
    let respuesta
   this.service.getuser(user, password).subscribe(data=>{
     
    if(data===null){
      
      Swal.fire({
        icon: 'error',
        title: 'No se ecuentra el usuario',
        text: 'Intente de nuevo...',
      })

    }else{
   
      
    
     this.authService.login();
     this.routeRedirect = this.authService.urlUsuarioIntentAcceder;
     this.authService.urlUsuarioIntentAcceder = '';
     this.router.navigate([this.routeRedirect]);


     respuesta=data
     localStorage.setItem("datosSesion", JSON.stringify(data));
   

     this.service.capRol(respuesta.rol)

     if(respuesta.rol=='Usuario'){
      this.router.navigate(['/dashboard'])
     }else{
      this.router.navigate(['/profile'])
     }
      


     


    }
  

    
    

  })
  }

}

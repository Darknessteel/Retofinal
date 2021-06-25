import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Usuario } from 'app/login/usuario';
import { LoginService } from 'app/shared/service/login.service';
import { from } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombreC: any
  username: any
  password: any
  direccion: any
  pais: any
  ciudad: any

  constructor( private servicioLogin: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  registro() {



    let propietario=this.username


    if (this.nombreC == null || this.username == null || this.password == null ||this.direccion == null || this.pais == null || this.ciudad == null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios',
        
      })
     
    } else {


      this.servicioLogin.getuser(this.username,
        this.password).subscribe(data => {
  
          if (data === null) {
  
  
  
            console.log("user que llega", this.username)
            console.log("clave que llega", this.password)
  
  
            let nombre = this.nombreC
            let direccion = this.direccion
            let pais = this.pais
            let ciudad = this.ciudad
            let username = this.username
            let password = this.password
            let rol = "Usuario"
  
  
            let usuario = new Usuario();
            usuario.general(rol,username, password, nombre, pais, ciudad, direccion);
            this.servicioLogin.saveUser(usuario).subscribe(data => {
  
              console.log(data);
  
            }, error => alert(error));
  
            Swal.fire({
  
              icon: 'success',
              title: 'Registrado Correctamente',
              showConfirmButton: true,
              timer: 1500
              
            })
            this.router.navigate(['/dashboard'])
  
          } else {
            Swal.fire({
              icon: 'error',
              title: 'No se pudo registrar!!!',
              text: 'Intente con otro usuario y contraseña...',
            })
          }
        })
    }

   
  }
}

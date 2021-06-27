import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/service/login.service';
import { Usuario } from '../login/usuario';
import { User } from './User';
import { execPath } from 'process';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  nombreCom: any
  user: any
  direccion: any
  pais: any
  ciudad: any
  contra: any
  id: any
  rol: any

  constructor(private service: LoginService) { }

  ngOnInit(): void {
    
let recuperarStorage = JSON.parse( localStorage.getItem("datosSesion"));

this.id= recuperarStorage.id;
this.rol=recuperarStorage.rol;
this.nombreCom = recuperarStorage.nombre;  
this.user = recuperarStorage.username;
this.direccion = recuperarStorage.direccion;
this.pais = recuperarStorage.pais;
this.ciudad = recuperarStorage.ciudad;
this.contra = recuperarStorage.password;

  }

  acutalizarU() {

    let recuperarStorage = JSON.parse( localStorage.getItem("datosSesion"));

    let id= this.id;
    let username = this.user;
    let password = this.contra;
    let nombre = this.nombreCom;
    let pais = this.pais;
    let ciudad = this.ciudad;
    let direccion = this.direccion;
    let rol = this.rol

    let usuario = new Usuario();

    usuario.update(id, username, password, nombre, pais, ciudad, direccion,rol)

    console.log(id)
    console.log(usuario)

    this.service.updareUsu(usuario).subscribe(data => {
      console.log(data); 
    }, 
    error => alert(error));

    Swal.fire({
      icon: 'success',
      title: 'Actualizado Correctamente',
      showConfirmButton: true,
      timer: 1500
    })

    recuperarStorage.id= this.id
    recuperarStorage.rol =this.rol
    recuperarStorage.nombre= this.nombreCom 
    recuperarStorage.username= this.user 
    recuperarStorage.direccion= this.direccion 
    recuperarStorage.pais= this.pais 
    recuperarStorage.ciudad= this.ciudad  
    recuperarStorage.password= this.contra 

    localStorage.setItem("datosSesion", JSON.stringify(recuperarStorage)); 
  }
}
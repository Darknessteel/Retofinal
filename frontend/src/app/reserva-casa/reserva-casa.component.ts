import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Casa } from 'app/register-house/Casa';
import { LoginService } from 'app/shared/service/login.service';
import Swal from 'sweetalert2';
import { Reserva } from './Reserva';


@Component({
  selector: 'app-reserva-casa',
  templateUrl: './reserva-casa.component.html',
  styleUrls: ['./reserva-casa.component.css']
})
export class ReservaCasaComponent implements OnInit {
  
  direccion: any
  ciudad: any
  propietario: any
  contacto: any
  llegada: any
  salida: any
  pais: any
  imagen1: any
  imagen2: any
  imagen3: any
  dial: any
  mesl: any
  aniol: any
  dias: any
  mess: any
  anios: any






  constructor(private service:LoginService,  private router: Router) { }

  ngOnInit(): void {
    this.direccion=this.service.direccionR;
    this.ciudad=this.service.ciudadR;
    this.propietario=this.service.propietarioR;
    this.contacto=this.service.contacto;
    this.pais=this.service.pais;
    this.llegada=this.service.llegada
    this.salida=this.service.salida
    this.imagen1= this.service.priimagen
    this.imagen2= this.service.seguimagen
    this.imagen3= this.service.terceimagen

    
  }

  Reservar(direccion,ciudad,propietario,contacto){
    let recuperarStorage = JSON.parse( localStorage.getItem("datosSesion"));
    
    let dire=direccion;
    let ciu=ciudad;
    let propi=propietario;
    let conta=contacto;
    let huesped=recuperarStorage.username;
    let pai=this.pais
    let diallegada=this.llegada.day
    let mesllegada=this.llegada.month
    let aniollegada=this.llegada.year
    let diasalida=this.salida.day
    let messalida=this.salida.month
    let aniosalida=this.salida.year
    let estado='1'
    let respuesta
    let reserva = new Reserva()

    reserva.registro(propi,huesped,pai,ciu,diallegada,mesllegada,aniollegada,diasalida,messalida,aniosalida,estado)

    this.service.addReserba(reserva).subscribe(data=>{
     

      this.service.getHouse(propi).subscribe(data2=>{
        respuesta=data2
        console.log(respuesta)


      let idH=respuesta.id
      let propietarioH = respuesta.propietario;
      let direccionH = respuesta.direccion;
      let telefonoH = respuesta.telefono;
      let paisH = respuesta.pais;
      let ciudadH = respuesta.ciudad;
      let disponibilidadH = '0';
      let valorH=respuesta.valor;
      let imagenun = respuesta.priimagen;
      let imagendo = respuesta.seguimagen;
      let imagentre = respuesta.terceimagen;
  
  
      let casa = new Casa();
      casa.actualizar(idH , disponibilidadH , telefonoH , paisH , ciudadH, direccionH , propietarioH,valorH, imagenun, imagendo, imagentre);
  
      this.service.updateHouse(casa).subscribe(data=>{


        
  
      }, error => alert(error));


      })


    })

  
    
    Swal.fire({
  
      icon: 'success',
      title: 'Reservado Correctamente',
      showConfirmButton: true,
      timer: 1500
      
    })
    this.router.navigate(['/dashboard'])

  }


}

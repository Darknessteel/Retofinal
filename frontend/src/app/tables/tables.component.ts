import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Casa } from 'app/register-house/Casa';
import { Reserva } from 'app/reserva-casa/Reserva';
import { LoginService } from 'app/shared/service/login.service';
import Swal from 'sweetalert2';
import { Calificacion } from './Calificacion';


declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  styles: [`
  .custom-day {
    text-align: center;
    padding: 0.185rem 0.25rem;
    display: inline-block;
    height: 100%;
    width: 100%;
  }
  .custom-day.focused {
    background-color: #e6e6e6;
  }
  .custom-day.range, .custom-day:hover {
    background-color: rgb(2, 117, 216);
    color: white;
  }
  .custom-day.faded {
    background-color: rgba(2, 117, 216, 0.5);
  }
  .star {
    font-size: 1.5rem;
    color: #b0c4de;
  }
  .filled {
    color: #1e90ff;
  }
  .bad {
    color: #deb0b0;
  }
  .filled.bad {
    color: #ff1e1e;
  }
`]
})
export class TablesComponent implements OnInit {


  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;



  currentRate = 5;
 
    titulo:any
    reservas: any 
    calificaciones: any


    comentario: any
    comentariop: any

    rol:any


    r: boolean
    b: boolean
    
  constructor(private service:LoginService,private router: Router, calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    
   }

  ngOnInit() {

    let recuperarStorage = JSON.parse( localStorage.getItem("datosSesion"));





this.rol=recuperarStorage.rol
//busqueda del rol del usuario

//acciones
if(this.rol=='Usuario'){
this.b=true
}else{
  this.b=false
}






if(this.rol=='Usuario'){
    this.titulo='Estas son tus reservas'
    this.r=false
    }else{
        this.titulo='Estas son las reservas de tu casa'
        this.r=true
    }





let reserva
this.service.finReservaH(recuperarStorage.username).subscribe(data=>{
    reserva=data
    this.reservas=data
})

if(this.rol=='Usuario-Casa'){
  let reserva
  this.service.finReservaHP(recuperarStorage.username).subscribe(data=>{
      reserva=data
      this.reservas=data
  })
}


this.service.findCaliP(recuperarStorage.username).subscribe(data=>{
  
  this.calificaciones=data
})



  }



  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }









  calificar(id,alfitrion){


    if(this.comentario == null){

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios',
        
      })

    }else{
      let recuperarStorage = JSON.parse( localStorage.getItem("datosSesion"));


      let estrellas = this.currentRate;
      let comentario= this.comentario;
      let usuario=recuperarStorage.username;
      let propietario= alfitrion
      let comentariop=''
      let cali= new Calificacion()
  
      cali.registro(estrellas,comentario,propietario,usuario,comentariop)
      this.service.addCalifica(cali).subscribe(data=>{
  
  
  
  
        let respue;
        this.service.eliminarRE(id).subscribe(data=>{
        
          this.service.getHouse(propietario).subscribe(data=>{
  
  
            respue=data
  
          
  
            let id=respue.id
            let propietario = respue.propietario;
            let direccion = respue.direccion;
            let telefono = respue.telefono;
            let pais = respue.pais;
            let ciudad = respue.ciudad;
            let disponibilidad = '1';
            let valor=respue.valor;
            let imagenun = respue.priimagen;
            let imagendo = respue.seguimagen;
            let imagentre = respue.terceimagen;
  
            
  
            let casa = new Casa();
            casa.actualizar(id , disponibilidad , telefono , pais , ciudad, direccion , propietario,valor, imagenun, imagendo, imagentre);
        
            this.service.updateHouse(casa).subscribe(data=>{
        
            }, error => alert(error));
            Swal.fire({
  
              icon: 'success',
              title: 'Todo salió bien!',
              showConfirmButton: true,
              timer: 1500
              
            })
            this.router.navigate(['/dashboard'])
        
          })
  
        })
  
      })

    }

  }




  calificap(idc,estrellasc,cometarioc,usuarioc,huespedc,newHero){
    let recuperarStorage = JSON.parse( localStorage.getItem("datosSesion"));
    usuarioc=recuperarStorage.username
    this.comentariop= newHero
    if(this.comentariop==null){

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios',
        
      })


    }else{

      let cali = new Calificacion();
  
      cali.update(idc,estrellasc,cometarioc,usuarioc,huespedc,this.comentariop);
  
      this.service.updateCalifica(cali).subscribe(data=>{
  
      }, error => alert(error));

      Swal.fire({
      icon: 'success',
      title: 'Todo salió bien!',
      showConfirmButton: true,
      timer: 1500
      
    })
   

    }

  }




  actualizarRese(id,alfitrion,ciudad,estado,huesped,pais){
  

    let dial=this.fromDate.day
    let mesl=this.fromDate.month
    let aniol=this.fromDate.year
    let dias=this.toDate.day
    let mess=this.toDate.month
    let anios=this.toDate.year

    let reserva= new Reserva()

    reserva.update(id,alfitrion,huesped,pais,ciudad,dial,mesl,aniol,dias,mess,anios,estado);
   
    
    
   
    
    this.service.updateReserva(reserva).subscribe(data=>{

    }, error => alert(error));

    Swal.fire({
    icon: 'success',
    title: 'Todo salió bien!',
    showConfirmButton: true,
    timer: 1000
    
  })
    
    
    
    
    
   
  }

}

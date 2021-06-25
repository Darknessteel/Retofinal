import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { LoginService } from 'app/shared/service/login.service';
import { Router } from '@angular/router';
import * as moment from 'moment'
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
`]
})
export class HomeComponent implements OnInit {
 
  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;



  ciudad: any;
  pais: any;
  casas: any;
  llegada: any;
  salida: any;


  diaD: any
  mesD: any
  añoD: any

  constructor(private service: LoginService, private router: Router, calendar: NgbCalendar) { 
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    
  }

  ngOnInit() {
 



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
  
  




 
    BuscarCasa(){
      let ciudad=this.ciudad;
      let pais=this.pais;
      let disponible=1
      
      
      this.llegada= this.fromDate
    
      
      let respuesta
      this.service.getHouses(ciudad,disponible,pais).subscribe(data=>{
        respuesta=data
        this.casas=respuesta

        this.diaD=this.fromDate.day
        this.mesD=this.fromDate.month
        this.añoD=this.fromDate.year

        console.log(respuesta);
        

        
      

      })

    }

    Reserva(dire,ciu,propi,conta,pais,priimagen,seguimagen,terceimagen){
      this.service.DatosReserva(dire,ciu,propi,conta,pais,this.llegada,this.toDate,priimagen,seguimagen,terceimagen)

      this.router.navigate(['/reservaCasa'])


    }






  }

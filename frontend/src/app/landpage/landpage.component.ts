import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/shared/service/login.service';


@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.css',],
  
})
export class LandpageComponent implements OnInit {

 

  pais: any
  ciudad: any
  casas:any
  

  constructor(private service: LoginService, private router: Router) {
   
   }

  ngOnInit(): void {
  }


















  BuscarCasa(){
    let ciudad=this.ciudad;
      let pais=this.pais;
      let disponible=1
      
      
      
      let respuesta
      this.service.getHouses(ciudad,disponible,pais).subscribe(data=>{
        respuesta=data
        this.casas=respuesta

        console.log(data)
        console.log(ciudad)
        console.log(disponible)

      })

  }

 


}

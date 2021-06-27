import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/service/login.service';
import { ProfileComponent } from '../profile/profile.component';
import { Usuario } from '../login/usuario';
import { Casa } from './Casa';
import { House } from './House';
import Swal from 'sweetalert2';
import { User } from 'app/profile/User';

@Component({
  selector: 'app-register-house',
  templateUrl: './register-house.component.html',
  styleUrls: ['./register-house.component.css'],

})
export class RegisterHouseComponent implements OnInit {

  originInput: any
  marcadores: any[]= []
  mapOptions
  positions: any[]= []
  map: google.maps.Map;
  originPlaceId: string;
  destinationPlaceId: string;
  travelMode: google.maps.TravelMode;
  directionsService: google.maps.DirectionsService;
  directionsRenderer: google.maps.DirectionsRenderer;




  id: any;
  direccion: any = null;
  user: any;
  telefono: any;
  pais: any;
  ciudad: any;
  valor:any;
  x: any = 0;
  imagenun: any
  imagendo: any
  imagentre: any

  //usuario datos

  idu: any
  useru: any
  contrau: any
  nombreComu: any
  paisu: any
  ciudadu: any
  direccionu: any
  rolu: any


  constructor(private service: LoginService) { }

  ngOnInit(): void {


    navigator.geolocation.getCurrentPosition((posicion)=>{
      let x=posicion.coords.latitude
      let y=posicion.coords.longitude
      let zoom=13
    
    this.mapOptions=[x,y,zoom]
    
      console.log("esta es la Y")
      console.log(y)
      console.log("esta es la X")
      console.log(x)
    
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          mapTypeControl: false,
          center: { lat: x, lng: y },
          zoom: 14,
        }
      );
    
    
    
    
    })
  

    let recuperarStorage = JSON.parse( localStorage.getItem("datosSesion"));

    let respuesta;
    this.user = recuperarStorage.username
    var house: House
    this.service.getHouse(this.user).subscribe(data => {

      respuesta = data;
      house = respuesta


      if (data == null) {
        this.x = 1
     

      } else {
        this.id = respuesta.id;
        this.user = respuesta.propietario;
        this.direccion = respuesta.direccion;
        this.telefono = respuesta.telefono;
        this.pais = respuesta.pais;
        this.ciudad = respuesta.ciudad;
        this.valor = respuesta.valor;
        this.imagenun = respuesta.priimagen;
        this.imagendo = respuesta.seguimagen;
        this.imagentre = respuesta.terceimagen;
      }

    })
  }








  onMapReady(map) {
    console.log('map', map);
    console.log('markers', map.markers);  // to get all markers as an array 

    
    this.originPlaceId = "";
    this.destinationPlaceId = "";
    this.travelMode = google.maps.TravelMode.WALKING;
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(map);


    this.originInput = document.getElementById(
      "origin-input"
    ) as HTMLInputElement;
      let variable=""
    const originAutocomplete = new google.maps.places.Autocomplete(this.originInput);
    // Specify just the place data fields that you need.
    originAutocomplete.setFields(["place_id"]);

    this.setupPlaceChangedListener(originAutocomplete, "ORIG",map);

    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.originInput);


  }

  setupPlaceChangedListener(
    autocomplete: google.maps.places.Autocomplete,
    mode: string,
    map: google.maps.Map
  ) {
    autocomplete.bindTo("bounds", map);

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (!place.place_id) {
        window.alert("Please select an option from the dropdown list.");
        return;
      }

      if (mode === "ORIG") {
        this.originPlaceId = place.place_id;
        console.log(this.originPlaceId)
      } 
   
    });
  }

  
  onIdle(event) {
    console.log('map', event.target);
    
  }
  onMarkerInit(marker) {
    console.log('hola', marker);
    let xxxx=marker.getPosition().lat()
    let yyyy=marker.getPosition().lng()


    this.marcadores.push({xxxx,yyyy})

    console.log("el arreglo es, ",this.marcadores)

  }
  onMapClick(event) {
    this.positions.push(event.latLng);
    event.target.panTo(event.latLng);

 
  }




// Initialize the map.
 initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 8,
      center: { lat: 40.72, lng: -73.96 },
    }
  );
  const geocoder = new google.maps.Geocoder();
  const infowindow = new google.maps.InfoWindow();


      this.geocodePlaceId(geocoder, map, infowindow);

}

// This function is called when the user clicks the UI button requesting
// a geocode of a place ID.
 geocodePlaceId(
  geocoder: google.maps.Geocoder,
  map: google.maps.Map,
  infowindow: google.maps.InfoWindow
) {


  console.log("click")
  const placeId = (document.getElementById("place-id") as HTMLInputElement)
    .value;
  geocoder.geocode({ placeId: placeId }, (results, status) => {
    if (status === "OK") {
      if (results[0]) {
        map.setZoom(13);
        map.setCenter(results[0].geometry.location);
        const marker = new google.maps.Marker({
          map,
          position: results[0].geometry.location,
        });
        infowindow.setContent(results[0].formatted_address);
        infowindow.open(map, marker);
      } else {
        window.alert("No results found");
      }
    } else {
      window.alert("Geocoder failed due to: " + status);
    }
  });
}
























  

  addHouse() {

    let id = this.id;
    let propietario = this.user;
    let direccion = this.direccion;
    let telefono = this.telefono;
    let pais = this.pais;
    let ciudad = this.ciudad;
    let disponibilidad = '1';
    let valor=this.valor;
    let casa = new Casa(); 
    let priimagen=this.imagenun;
    let seguimagen=this.imagendo;
    let terceimagen=this.imagentre;
    



    this.service.getHouse(propietario).subscribe(data => {

      if (data == null) {




        if (propietario == null || direccion == null || telefono == null || pais == null || ciudad == null || valor == null || priimagen == null || seguimagen == null || terceimagen == null) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son obligatorios',

          })
        } else {
          let recuperarStorage = JSON.parse( localStorage.getItem("datosSesion"));

          casa.registro(disponibilidad, telefono, pais, ciudad, direccion, propietario, valor, priimagen, seguimagen, terceimagen);

          this.service.savehouse(casa).subscribe(data => {
            
          }, error => alert(error));

          
          let usernameu=recuperarStorage.username
          let passwordu=recuperarStorage.password

          let respuesta
          var user: User
          this.service.getuser(usernameu,passwordu).subscribe(data=>{
            respuesta=data;
            user=respuesta;
            let idu= this.idu;
            let usernameu = this.useru;
            let passwordu = this.contrau;
            let nombreu = this.nombreComu;
            let paisu = this.paisu;
            let ciudadu = this.ciudadu;
            let direccionu = this.direccionu;
            let rolu = this.rolu;

            idu=user.id
            usernameu=user.username
            passwordu=user.password
            nombreu=user.nombre
            paisu=user.pais
            ciudadu=user.ciudad
            direccionu=user.direccion
            rolu="Usuario-Casa"
        
            let usuario = new Usuario();
        
            usuario.update(idu, usernameu, passwordu, nombreu, paisu, ciudadu, direccionu,rolu)

            this.service.updareUsu(usuario).subscribe(data => {
              console.log(data);
        
            }, error => alert(error));

          })


      
          

        
    



          Swal.fire({
            icon: 'success',
            title: 'Registrado Correctamente',
            showConfirmButton: true,
            timer: 1500
          })

        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Ya tienes casa registrada',
          text: '',
        })
      }


    })

  }


  updateHouse() {
    let id=this.id
    let propietario = this.user;
    let direccion = this.direccion;
    let telefono = this.telefono;
    let pais = this.pais;
    let ciudad = this.ciudad;
    let disponibilidad = '1';
    let valor=this.valor;
    let imagenun= this.imagenun
    let imagendo=this.imagendo
    let imagentre=this.imagentre


    let casa = new Casa();
    casa.actualizar(id , disponibilidad , telefono , pais , ciudad, direccion , propietario,valor, imagenun, imagendo, imagentre);

    this.service.updateHouse(casa).subscribe(data=>{

    }, error => alert(error));
    Swal.fire({
      icon: 'success',
      title: 'Actualizado Correctamente',
      showConfirmButton: true,
      timer: 1500
    })
  }

}
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Reserva } from 'app/reserva-casa/Reserva';
import { Calificacion } from 'app/tables/Calificacion';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../../login/usuario';
import { Casa } from '../../register-house/Casa';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {  }

  @Output() datos: any;
  username: any;
  clave: any;
  rol: any;

  direccionR: any;
  ciudadR: any;
  propietarioR: any;
  contacto: any;
  pais: any;
  llegada: any;
  salida: any;
  priimagen: any;
  seguimagen: any;
  terceimagen: any;



  dia: any;
  mes: any;
  año: any;

  capRol(rol){
    this.rol=rol
  }

  getuser<Usuario>(user,password):Observable<Usuario>{

    this.username=user
    this.clave=password

    return this.http.get('http://localhost:8080/user/login?username='+user+'&password='+password).pipe(map((response) => response as Usuario));


  }


  saveUser(usuario: Usuario): Observable<any> {

    console.log("llega al service", usuario)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(usuario);

    console.log(headers," ", body)

    return this.http.post('http://localhost:8080/user/register', body, {'headers': headers});

  }

  updareUsu(usuario: Usuario): Observable<any> {

    console.log("llega al service", usuario)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(usuario);

    console.log(headers," ", body)

    return this.http.put('http://localhost:8080/user/update', body, {'headers': headers});

  }

  savehouse(casa: Casa): Observable<any>{
    console.log("llega al service", casa)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(casa);

    console.log(headers," ", body)

    return this.http.post('http://localhost:8080/house/registerHo', body, {'headers': headers});
  }


  getHouse<House>(propietario):Observable<House>{



    return this.http.get('http://localhost:8080/house/casa?propietario='+propietario).pipe(map((response) => response as House));


  }

  getHouses<House>(ciudad,disponible,pais):Observable<House>{
    return this.http.get('http://localhost:8080/house/findHouses?ciudad='+ciudad+'&disponibilidad='+disponible+'&pais='+pais).pipe(map((Response)=> Response as House));
  }

  updateHouse(casa: Casa): Observable<any> {

    console.log("llega al service", casa)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(casa);

    console.log(headers," ", body)

    return this.http.put('http://localhost:8080/house/updateH', body, {'headers': headers});

  }

  DatosReserva( direccionR, ciudadR, propietarioR, contacto, pais,llegada,salida,priimagen,seguimagen,terceimagen){
    this.direccionR= direccionR;
    this.ciudadR=ciudadR;
    this.propietarioR=propietarioR;
    this.contacto=contacto;
    this.pais=pais;
    this.llegada=llegada
    this.salida=salida
    this.priimagen=priimagen
    this.seguimagen=seguimagen
    this.terceimagen=terceimagen
  }


  addReserba(reserva: Reserva): Observable<any>{
    console.log("llega al service", reserva)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(reserva);

    console.log(headers," ", body)

    return this.http.post('http://localhost:8080/reserva/addReserva', body, {'headers': headers});
  }


  finReservaH<Reserva>(huesped):Observable<Reserva>{

    return this.http.get('http://localhost:8080/reserva/buscaReserva?huesped='+huesped).pipe(map((response) => response as Reserva));


  }
  findCaliP <Reserva>(usuario):Observable<Reserva>{

    return this.http.get('http://localhost:8080/califica/byusuario?usuario='+usuario).pipe(map((response) => response as Reserva));


  }

  finReservaHP <Calificacion>(alfitrion):Observable<Calificacion>{

    return this.http.get('http://localhost:8080/reserva/buscaReservaP?alfitrion='+alfitrion).pipe(map((response) => response as Calificacion));


  }

  updateReserva(reserva: Reserva): Observable<any> {

    console.log("llega al service", reserva)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(reserva);

    console.log(headers," ", body)

    return this.http.put('http://localhost:8080/reserva/updateR', body, {'headers': headers});

  }

  eliminarRE <Reserva>(id):Observable<Reserva>{

    return this.http.delete('http://localhost:8080/reserva/eliminarR?id='+id).pipe(map((response) => response as Reserva));


  }

  getReseId<Reserva>(id):Observable<Reserva>{

    return this.http.get('localhost:8080/reserva/buscaReservaid?id='+id).pipe(map((response) => response as Reserva));

  }



  addCalifica(califica: Calificacion): Observable<any>{
    console.log("llega al service", califica)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(califica);

    console.log(headers," ", body)

    return this.http.post('http://localhost:8080/califica/addCalifica', body, {'headers': headers});
  }

  updateCalifica(calificacion: Calificacion): Observable<any> {

    console.log("llega al service", calificacion)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(calificacion);

    console.log(headers," ", body)

    return this.http.put('http://localhost:8080/califica/updateC', body, {'headers': headers});

  }

}

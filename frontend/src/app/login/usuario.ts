export class Usuario {
    id: number;
    rol; string;
    username: string;
    password: string;
    nombre: string;
    pais: string;
    ciudad: string; 
    direccion: string;
    constructor() {

        
    }

    login(password: string, username: string){
        this.password=password;
        this.username=username;
    }

    general(rol: string,username: string, password: string, nombre: string, pais: string, ciudad: string, direccion: string){
        this.rol=rol;
        this.username=username;
        this.password=password;
        this.nombre=nombre;
        this.pais=pais;
        this.ciudad=ciudad;
        this. direccion=direccion;
    }
    update(id: number, username: string, password: string, nombre: string, pais: string, ciudad: string, direccion: string, rol: string){
        this.id=id;
        this.username=username;
        this.password=password;
        this.nombre=nombre;
        this.pais=pais;
        this.ciudad=ciudad;
        this. direccion=direccion;
        this.rol=rol;
    }






}
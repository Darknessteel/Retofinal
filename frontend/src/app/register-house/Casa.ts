export class Casa {
     id;
     disponibilidad;
     telefono;
     pais;
     ciudad;
     direccion;
     propietario;
     valor;
     priimagen;
     seguimagen;
     terceimagen;
    constructor() {

        
    }

    registro(disponibilidad: string, telefono: string, pais: string, ciudad:string, direccion: string, propietario: string, valor: string, priimagen: string, seguimagen: string, terceimagen: string){
        this.disponibilidad=disponibilidad;
        this.telefono=telefono;
        this.pais=pais;
        this.ciudad=ciudad;
        this.direccion=direccion;
        this.propietario=propietario;
        this.valor=valor;
        this.priimagen=priimagen;
        this.seguimagen=seguimagen;
        this.terceimagen=terceimagen;
    }
    actualizar(id: number, disponibilidad: string, telefono: string, pais: string, ciudad:string, direccion: string, propietario: string, valor: string, priimagen: string, seguimagen: string, terceimagen: string){
        this.id=id;
        this.disponibilidad=disponibilidad;
        this.telefono=telefono;
        this.pais=pais;
        this.ciudad=ciudad;
        this.direccion=direccion;
        this.propietario=propietario;
        this.valor=valor;
        this.priimagen=priimagen;
        this.seguimagen=seguimagen;
        this.terceimagen=terceimagen;
    }

}
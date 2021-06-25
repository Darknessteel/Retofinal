export class Calificacion {
      id;
      estrellas;
      cometario;
      usuario;
      huesped;
      cometariop;

   constructor() {

       
   }

   registro(estrellas: number, cometario:string,  usuario:string, huesped:string, cometariop:string){
   this.estrellas=estrellas;
   this.cometario=cometario;
   this.usuario=usuario;
   this.huesped=huesped
   this.cometariop=cometariop
}
update(id:Number, estrellas: number, cometario:string,  usuario:string, huesped:string, cometariop:string){
   this.id=id;
   this.estrellas=estrellas;
   this.cometario=cometario;
   this.usuario=usuario;
   this.huesped=huesped
   this.cometariop=cometariop
}
   
}
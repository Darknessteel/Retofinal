export class Reserva {
    id;
    alfitrion;
    huesped;
    pais;
    ciudad;
    dial;
    mesl;
    aniol;
    dias;
    mess;
    anios;
    estado;

    constructor() {

        
    }

    registro(alfitrion: string, huesped: string, pais:string, ciudad: string, dial: string, mesl: string, aniol: string, dias: string, mess: string, anios: string, estado: string){
        this.alfitrion=alfitrion;
        this.huesped=huesped;
        this.pais=pais;
        this.ciudad=ciudad;
        this.dial=dial;
        this.mesl=mesl;
        this.aniol=aniol
        this.dias=dias;
        this.mess=mess;
        this.anios=anios
        this.estado=estado;
    }

    update(id: number, alfitrion: string, huesped: string, pais: string, ciudad: string,  dial: number, mesl: number, aniol: number, dias: number, mess: number, anios: number, estado: string){
        this.id=id;
        this.alfitrion=alfitrion;
        this.huesped=huesped;
        this.pais=pais;
        this.ciudad=ciudad;
        this.dial=dial;
        this.mesl=mesl;
        this.aniol=aniol
        this.dias=dias;
        this.mess=mess;
        this.anios=anios
        this.estado=estado;
    }


}
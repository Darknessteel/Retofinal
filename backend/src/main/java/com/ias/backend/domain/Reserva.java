package com.ias.backend.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
 @Table(name = "sebastian_tbl_app_reservas")
 @Data
public class Reserva {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private String alfitrion;
    private String huesped;
    private String pais;
    private String ciudad;
  
    private int dial;
    private int mesl;
    private int aniol;
    private int dias;
    private int mess;
    private int anios;

    private String estado;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getAlfitrion() {
        return alfitrion;
    }
    public void setAlfitrion(String alfitrion) {
        this.alfitrion = alfitrion;
    }
    public String getHuesped() {
        return huesped;
    }
    public void setHuesped(String huesped) {
        this.huesped = huesped;
    }
    public String getPais() {
        return pais;
    }
    public void setPais(String pais) {
        this.pais = pais;
    }
    public String getCiudad() {
        return ciudad;
    }
    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }
    public String getEstado() {
        return estado;
    }
    public void setEstado(String estado) {
        this.estado = estado;
    }
    public int getDial() {
        return dial;
    }
    public void setDial(int dial) {
        this.dial = dial;
    }
    public int getMesl() {
        return mesl;
    }
    public void setMesl(int mesl) {
        this.mesl = mesl;
    }
    public int getAniol() {
        return aniol;
    }
    public void setAniol(int aniol) {
        this.aniol = aniol;
    }
    public int getDias() {
        return dias;
    }
    public void setDias(int dias) {
        this.dias = dias;
    }
    public int getMess() {
        return mess;
    }
    public void setMess(int mess) {
        this.mess = mess;
    }
    public int getAnios() {
        return anios;
    }
    public void setAnios(int anios) {
        this.anios = anios;
    }
  
    
}

package com.ias.backend.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Entity
 @Table(name = "stars")
 @Data

public class Califica {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private int estrellas;
    private String cometario;
    private String usuario;
    private String huesped;
    private String cometariop;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getEstrellas() {
        return estrellas;
    }
    public void setEstrellas(int estrellas) {
        this.estrellas = estrellas;
    }
    public String getCometario() {
        return cometario;
    }
    public void setCometario(String cometario) {
        this.cometario = cometario;
    }
    public String getUsuario() {
        return usuario;
    }
    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }
    public String getHuesped() {
        return huesped;
    }
    public void setHuesped(String huesped) {
        this.huesped = huesped;
    }
    public String getCometariop() {
        return cometariop;
    }
    public void setCometariop(String cometariop) {
        this.cometariop = cometariop;
    }
    
}

package com.ias.backend.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
 @Table(name = "sebastian_tbl_app_houses")
 @Data
public class House {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private String disponibilidad;
    private String telefono;
    private String pais;
    private String ciudad;
    private String direccion;
    private String propietario;
    private String valor;
    private String priimagen;
    private String seguimagen;
    private String terceimagen;
    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getDisponibilidad() {
        return disponibilidad;
    }
    public void setDisponibilidad(String disponibilidad) {
        this.disponibilidad = disponibilidad;
    }
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
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
    public String getDireccion() {
        return direccion;
    }
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
    public String getPropietario() {
        return propietario;
    }
    public void setPropietario(String propietario) {
        this.propietario = propietario;
    }
    public String getValor() {
        return valor;
    }
    public void setValor(String valor) {
        this.valor = valor;
    }
    public String getPriimagen() {
        return priimagen;
    }
    public void setPriimagen(String priimagen) {
        this.priimagen = priimagen;
    }
    public String getSeguimagen() {
        return seguimagen;
    }
    public void setSeguimagen(String seguimagen) {
        this.seguimagen = seguimagen;
    }
    public String getTerceimagen() {
        return terceimagen;
    }
    public void setTerceimagen(String terceimagen) {
        this.terceimagen = terceimagen;
    }



    
}

package com.example.serviciowpp.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "rol")
public class Rol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idrol;
    private String nombre;
    
    public Rol() {
    }

    public Rol(int idrol, String nombre) {
        super();
        this.idrol = idrol;
        this.nombre = nombre;
    }

    public void setIdRol(int value){
        this.idrol = value;
    }

    public void setNombre(String value){
        this.nombre = value;
    }

    public int getIdRol(){
        return this.idrol;
    }

    public String getNombre(){
        return this.nombre;
    }
}

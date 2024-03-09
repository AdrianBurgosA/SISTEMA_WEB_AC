package com.example.serviciowpp.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "empleado")
public class Empleado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String cedula;
    private String nombre;
    private String apellido;

    public Empleado() {
    }

    public Empleado(String cedula, String nombre, String apellido) {
        super();
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    public void setCedula(String value){
        this.cedula = value;
    }   
    public void setNombre(String value){
        this.nombre = value;
    }   
    public void setApellido(String value){
        this.apellido = value;
    }   

    public String getCedula(){
        return this.cedula;
    }
    public String getNombre(){
        return this.nombre;
    }
    public String getApellido(){
        return this.apellido;
    }
}

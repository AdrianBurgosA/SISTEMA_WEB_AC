package com.example.serviciowpp.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String cedula;
    private int idrol;
    private String username;
    private String password;
    
    public Usuario() {
    }

    public Usuario(int id, String cedula, int idrol, String username, String password) {
        this.id = id;
        this.cedula = cedula;
        this.idrol = idrol;
        this.username = username;
        this.password = password;
    }

    public void setId(int value){
        this.id = value;
    }
    public void setIdRol(int value){
        this.idrol = value;
    }
    
    public int getId(){
        return this.id;
    }
    public int getIdRol(){
        return this.idrol;
    }

    public void setCedula(String value){
        this.cedula = value;
    }
    public void setUsername(String value){
        this.username = value;
    }
    public void setPassword(String value){
        this.password = value;
    }
   
    public String getCedula(){
        return this.cedula;
    }
    public String getUsername(){
        return this.username;
    }
    public String getPassword(){
        return this.password;
    }
}

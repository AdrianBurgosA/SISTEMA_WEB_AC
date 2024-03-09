/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.serviciowpp.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "estado")
public class Estado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idestado;
    private String nombre;

    public Estado() {
    }

    public Estado(int idestado, String nombre) {
        this.idestado = idestado;
        this.nombre = nombre;
    }

    public void setIdestado(int idestado) {
        this.idestado = idestado;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getIdestado() {
        return idestado;
    }

    public String getNombre() {
        return nombre;
    }
}

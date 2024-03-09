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
@Table(name = "tramite")
public class Tramite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idtramite;
    private String nombre;

    public Tramite() {
    }

    public Tramite(int idtramite, String nombre) {
        this.idtramite = idtramite;
        this.nombre = nombre;
    }

    public void setIdtramite(int idtramite) {
        this.idtramite = idtramite;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getIdtramite() {
        return idtramite;
    }

    public String getNombre() {
        return nombre;
    }
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.serviciowpp.models;

import java.sql.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "ticket")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idticket;
    private int id;
    private int idtramite;
    private int idestado;
    private String cedulacli;
    private Date fecha;

    public Ticket() {
    }

    public Ticket(int idticket, int id, int idtramite, int idestado, String cedulacli, Date fecha) {
        this.idticket = idticket;
        this.id = id;
        this.idtramite = idtramite;
        this.idestado = idestado;
        this.cedulacli = cedulacli;
        this.fecha = fecha;
    }

    public int getIdticket() {
        return idticket;
    }

    public int getId() {
        return id;
    }

    public int getIdtramite() {
        return idtramite;
    }

    public int getIdestado() {
        return idestado;
    }

    public String getCedulacli() {
        return cedulacli;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setIdticket(int idticket) {
        this.idticket = idticket;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setIdtramite(int idtramite) {
        this.idtramite = idtramite;
    }

    public void setIdestado(int idestado) {
        this.idestado = idestado;
    }

    public void setCedulacli(String cedulacli) {
        this.cedulacli = cedulacli;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }
    
    
}

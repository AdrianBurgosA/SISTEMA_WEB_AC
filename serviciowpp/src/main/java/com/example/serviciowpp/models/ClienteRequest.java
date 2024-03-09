package com.example.serviciowpp.models;

public class ClienteRequest {
    private String cedulacli;
    private String nombre;
    private String apellido;
    private String telefono;
    private Usuario usuario;

    public ClienteRequest() {
    }
    public ClienteRequest(String cedulacli, String nombre, String apellido, String telefono, Usuario usuario) {
        this.cedulacli = cedulacli;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.usuario = usuario;
    }
    public String getCedulacli() {
        return cedulacli;
    }
    public void setCedulacli(String cedulacli) {
        this.cedulacli = cedulacli;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApellido() {
        return apellido;
    }
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    public Usuario getUsuario() {
        return usuario;
    }
    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}

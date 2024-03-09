package com.example.serviciowpp.models;

public class UsuarioResponse {
    private int id;
    private String username;
    private String password;
    private int idrol;
    private String nombreRol;
    private String cedula;
    private String nombre;
    private String apellido;

    public UsuarioResponse() {
    }

    public UsuarioResponse(int id, String cedula, int idrol, String username, String password, String nombreRol,
            String nombre, String apellido) {
        this.id = id;
        this.cedula = cedula;
        this.idrol = idrol;
        this.username = username;
        this.password = password;
        this.nombreRol = nombreRol;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public int getIdrol() {
        return idrol;
    }

    public void setIdrol(int idrol) {
        this.idrol = idrol;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNombreRol() {
        return nombreRol;
    }

    public void setNombreRol(String nombreRol) {
        this.nombreRol = nombreRol;
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

}

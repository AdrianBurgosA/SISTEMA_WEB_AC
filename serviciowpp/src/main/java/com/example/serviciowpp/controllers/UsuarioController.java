package com.example.serviciowpp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.serviciowpp.models.*;
import com.example.serviciowpp.services.*;

@RestController
@RequestMapping(path = "api/usuarios")
public class UsuarioController {
    @Autowired
    UsuarioService usc;

    @Autowired
    RolService rc;

    @Autowired
    EmpleadoService ec;

    // *Este servicio es para el login
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/login/{u}/{p}")
    public Usuario login(@PathVariable("u") String u, @PathVariable("p") String p){
        return usc.getUsuario(u,p);
    }


    // *Este servicio es retornar la informacion para mostrar la informacion en el app
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{u}/{p}")
    public UsuarioResponse getUsuario(@PathVariable("u") String u, @PathVariable("p") String p) {
        Usuario usuario = usc.getUsuario(u, p);
        Empleado empleado = ec.getEmpleado(usuario.getCedula());
        Rol rol = rc.getRol(usuario.getIdRol());
        return new UsuarioResponse(usuario.getId(), usuario.getCedula(), usuario.getIdRol(), usuario.getUsername(),
        usuario.getPassword(), rol.getNombre(), empleado.getNombre(), empleado.getApellido());
    }
    
    // *Este servicio es retornar la informacion para el login
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/")
    public List<Usuario> getUsers(){
        return usc.getUsuarios();
    }

    //* Servicio para guardar o actualizar un usuario
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/")
    public void guardarActualizar(@RequestBody Usuario u){
        usc.saveUpdate(u);
    }

    //* Servicio para eliminar un usuario
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/{id}")
    public void borrar(@PathVariable("id") int id){
        usc.borrar(id);
    }
}

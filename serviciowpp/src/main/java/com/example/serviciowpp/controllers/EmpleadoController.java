package com.example.serviciowpp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.serviciowpp.models.*;
import com.example.serviciowpp.services.*;

@RestController
@RequestMapping(path = "api/empleados")
public class EmpleadoController {
    @Autowired
    EmpleadoService eService;

    @Autowired
    UsuarioService uService;

    // *Este servicio retorna todos los empleados
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/")
    public List<Empleado> getEmpleados(){
        return eService.getEmpleados();
    }

    //*Este servicio debe registrar un nuevo empleado y un nuevo usuario
    // !Este servicio no funciona xd, a mimir
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/")
    public void guardarActualizar(@RequestBody Empleado e){
        System.out.println(e.toString());
        eService.guardarActualizar(new Empleado(e.getCedula(), e.getNombre(), e.getApellido()));
        //uService.saveUpdate(new Usuario(e.getCedula(), e.getIdrol(), e.getUsername(), e.getPassword()));
    }

    //* Servicio para eliminar un empleado y el usuario
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/")
    public void borrar(@RequestBody EmpleadoRequest e){
        uService.borrar(e.getUsuario().getId());
        eService.borrar(e.getCedula());
    }
}

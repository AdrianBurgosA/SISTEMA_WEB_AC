package com.example.serviciowpp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.serviciowpp.models.*;
import com.example.serviciowpp.services.*;

@RestController
@RequestMapping(path = "api/clientes")
public class ClienteController {
    @Autowired
    ClienteService cService;

    // *Este servicio retorna todos los clientes
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/")
    public List<Cliente> getClientes() {
        return cService.getClientes();
    }
  
    // *Este servicio retorna todos los clientes
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{c}")
    public boolean getCliente(@PathVariable("c") String c) {
        return cService.existeCliente(c);
    }

    //*Este servicio debe registrar un nuevo cliente y un nuevo usuario
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/")
    public void guardarActualizar(@RequestBody Cliente c){
        cService.guardarActualizar(c);
    }

    //* Servicio para eliminar un cliente y el usuario
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/{c}")
    public void borrar(@PathVariable("c") String c){
        cService.borrar(c);
    }
}

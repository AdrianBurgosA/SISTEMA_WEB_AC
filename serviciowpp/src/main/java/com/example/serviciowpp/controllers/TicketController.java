package com.example.serviciowpp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.serviciowpp.models.*;
import com.example.serviciowpp.services.*;

@RestController
@RequestMapping(path = "api/tickets")
public class TicketController {
    @Autowired
    TicketService service;

    // *Este servicio retorna todos los tickets
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/")
    public List<Ticket> getTickets() {
        return service.getTickets();
    }

    // *Este servicio debe registrar un nuevo ticket
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/")
    public void guardarActualizar(@RequestBody Ticket t) {
        service.saveUpdate(t);
    }

    // * Servicio para eliminar un ticket
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/{id}")
    public void borrar(@PathVariable("id") int id) {
        service.borrar(id);
    }
}

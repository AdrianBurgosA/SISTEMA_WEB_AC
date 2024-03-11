package com.example.serviciowpp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.serviciowpp.models.*;
import com.example.serviciowpp.services.*;

@RestController
@RequestMapping(path = "api/estados")
public class EstadoController {
    @Autowired
    EstadoService service;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/")
    public List<Estado> getEstados(){
        return service.getEstados();
    }
}

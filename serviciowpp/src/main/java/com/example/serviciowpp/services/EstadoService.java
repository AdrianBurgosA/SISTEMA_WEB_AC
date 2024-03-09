package com.example.serviciowpp.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.serviciowpp.models.*;
import com.example.serviciowpp.repository.*;

@Service
public class EstadoService {
    @Autowired
    EstadoRep rep;

    public List<Estado> getEstados(){
        return rep.findAll();
    }
}

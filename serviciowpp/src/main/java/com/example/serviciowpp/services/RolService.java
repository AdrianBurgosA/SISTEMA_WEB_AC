package com.example.serviciowpp.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.serviciowpp.models.Rol;
import com.example.serviciowpp.repository.RolRep;

@Service
public class RolService {
    @Autowired
    RolRep rep;

    public List<Rol> getRoles(){
        return rep.findAll();
    }

    public Rol getRol(int i){
        return rep.findByIdrol(i);
    }
}

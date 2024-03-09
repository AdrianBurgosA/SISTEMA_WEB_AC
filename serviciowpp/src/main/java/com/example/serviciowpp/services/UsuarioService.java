package com.example.serviciowpp.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.serviciowpp.models.*;
import com.example.serviciowpp.repository.*;

@Service
public class UsuarioService {
    @Autowired
    UsuarioRep rep;

    public List<Usuario> getUsuarios(){
        return rep.findAll();
    }

    public void saveUpdate(Usuario u){
        rep.save(u);
    }

    public void borrar(int id){
        rep.deleteById(id);
    }

    public Usuario getUsuario(String u, String p){
        return rep.findByUsernameAndPassword(u, p);
    }
}

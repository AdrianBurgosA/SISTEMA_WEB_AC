package com.example.serviciowpp.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.serviciowpp.models.*;
import com.example.serviciowpp.repository.*;

@Service
public class ClienteService {
    @Autowired
    ClienteRep rep;

    public List<Cliente> getClientes(){
        return rep.findAll();
    }

    public void guardarActualizar(Cliente c){
        rep.save(c);
    }

    public void borrar(String c){
        rep.deleteByCedulacli(c);
    }

    public boolean existeCliente(String c){
        Cliente cliente = rep.findByCedulacli(c);
        if(cliente == null){
            return false;
        }
        return true;
    }

    public Cliente getCliente(String c){
        return rep.findByCedulacli(c);
    }
}

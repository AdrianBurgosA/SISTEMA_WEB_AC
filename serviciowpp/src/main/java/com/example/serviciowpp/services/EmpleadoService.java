package com.example.serviciowpp.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.serviciowpp.models.*;
import com.example.serviciowpp.repository.*;

@Service
public class EmpleadoService {
    @Autowired
    EmpleadoRep rep;

    public List<Empleado> getEmpleados(){
        return rep.findAll();
    }

    public Empleado getEmpleado(String c){
        return rep.findByCedula(c);
    }

    public void guardarActualizar(Empleado e){
        rep.save(e);
    }

    public void borrar(String c){
        rep.deleteByCedula(c);
    }
}

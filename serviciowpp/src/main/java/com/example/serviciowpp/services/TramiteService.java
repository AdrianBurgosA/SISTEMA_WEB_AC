package com.example.serviciowpp.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.serviciowpp.models.*;
import com.example.serviciowpp.repository.*;

@Service
public class TramiteService {
    @Autowired
    TramiteRep rep;

    public List<Tramite> getTramites(){
        return rep.findAll();
    }
}

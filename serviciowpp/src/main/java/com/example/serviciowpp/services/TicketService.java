package com.example.serviciowpp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.serviciowpp.models.*;
import com.example.serviciowpp.repository.*;

@Service
public class TicketService {
    @Autowired
    TicketRep rep;

    public List<Ticket> getTickets(){
        return rep.findAll();
    }

    public void saveUpdate(Ticket t){
        rep.save(t);
    }

    public void borrar(int id){
        rep.deleteById(id);
    }

    public List<Ticket> getTicketByUs(int i){
        return rep.findByIdus(i);
    }
}

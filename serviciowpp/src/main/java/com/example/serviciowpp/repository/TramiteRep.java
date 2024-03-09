package com.example.serviciowpp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.serviciowpp.models.*;

@Repository
public interface TramiteRep extends JpaRepository<Tramite, Integer>{
    
}

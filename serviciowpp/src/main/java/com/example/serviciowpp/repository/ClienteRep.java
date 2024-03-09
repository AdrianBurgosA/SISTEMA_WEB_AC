package com.example.serviciowpp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.serviciowpp.models.*;

@Repository
public interface ClienteRep extends JpaRepository<Cliente, String>{
    void deleteByCedulacli(String c);
    Cliente findByCedulacli(String cedulacli);
}

package com.ias.backend.repository;


import com.ias.backend.domain.Reserva;
import org.springframework.data.repository.CrudRepository;

public interface ReservaRepository extends CrudRepository<Reserva, Integer> {

    Iterable<Reserva> findByHuesped(String husped);
    Reserva findById(int id);
    Iterable<Reserva> findByAlfitrion(String alfitrion);
  

}

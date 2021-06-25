package com.ias.backend.repository;

import com.ias.backend.domain.House;

import org.springframework.data.repository.CrudRepository;


public interface HouseRepository extends CrudRepository<House, Integer> {

    House findByPropietario(String propietario);
    Iterable<House> findByCiudadAndDisponibilidadAndPais(String ciudad, String disponibilidad, String pais );
   
    
}

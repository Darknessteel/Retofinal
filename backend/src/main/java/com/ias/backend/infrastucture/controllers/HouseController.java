package com.ias.backend.infrastucture.controllers;

import com.ias.backend.domain.House;
import com.ias.backend.repository.HouseRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value="/house",produces = MediaType.APPLICATION_JSON_VALUE)
public class HouseController {
    
    private HouseRepository houseRepository;

    public HouseController(HouseRepository _houseRepository){
        this.houseRepository = _houseRepository;
    }

    @GetMapping(value="/all")
    public ResponseEntity<Iterable<House>> GetAllHouse(){
        return new ResponseEntity<Iterable<House>>(houseRepository.findAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping(value="/findHouses")
    public ResponseEntity<Iterable<House>> GetInfo(String ciudad, String disponibilidad, String pais  ) {
        return new ResponseEntity<Iterable<House>>(houseRepository.findByCiudadAndDisponibilidadAndPais(ciudad,disponibilidad, pais), HttpStatus.ACCEPTED);
    }

    @GetMapping(value="/casa")
    public ResponseEntity<House> GetDates( String propietario) {
    
        return new ResponseEntity<House>(houseRepository.findByPropietario(propietario), HttpStatus.ACCEPTED);
    }

    @PostMapping(value="/registerHo")
    public ResponseEntity<House> CreateHouse(@RequestBody House house){

        return new ResponseEntity<House>(houseRepository.save(house), HttpStatus.CREATED);
    }

    
    @PutMapping(value="/updateH")
    public ResponseEntity<House> updateH(@RequestBody House house){
        System.out.println(house.getId());
        return new ResponseEntity<House>(houseRepository.save(house), HttpStatus.NO_CONTENT);
    }

  


}
    

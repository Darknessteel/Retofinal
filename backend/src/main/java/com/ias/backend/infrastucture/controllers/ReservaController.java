package com.ias.backend.infrastucture.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ias.backend.domain.Reserva;
import com.ias.backend.repository.ReservaRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value="/reserva",produces = MediaType.APPLICATION_JSON_VALUE)
public class ReservaController {

    private ReservaRepository reservaRepository;

    public ReservaController(ReservaRepository reservaRepository){
        this.reservaRepository = reservaRepository;
    }
    
    @GetMapping(value="/all")
    public ResponseEntity<Iterable<Reserva>> GetAllReservas(){
        return new ResponseEntity<Iterable<Reserva>>(reservaRepository.findAll(), HttpStatus.ACCEPTED);
    }

    @PostMapping(value="/addReserva")
    public ResponseEntity<Reserva> CreateHouse(@RequestBody Reserva reserva){

        return new ResponseEntity<Reserva>(reservaRepository.save(reserva), HttpStatus.CREATED);
    }

     @GetMapping(value="/buscaReserva")
    public ResponseEntity<Iterable<Reserva>> getUser(String huesped) {
        
        return new ResponseEntity<Iterable<Reserva>>(reservaRepository.findByHuesped(huesped), HttpStatus.ACCEPTED);
    }


    @GetMapping(value="/buscaReservaP")
    public ResponseEntity<Iterable<Reserva>> getresep(String alfitrion) {
        
        return new ResponseEntity<Iterable<Reserva>>(reservaRepository.findByAlfitrion(alfitrion), HttpStatus.ACCEPTED);
    }

    @PutMapping(value="/updateR")
    public ResponseEntity<Reserva> updateR(@RequestBody Reserva reserva){
  
        return new ResponseEntity<Reserva>(reservaRepository.save(reserva), HttpStatus.NO_CONTENT);
    }

    @DeleteMapping(value = "/eliminarR")
    public ResponseEntity<Reserva> eliminar(Integer id) {
        this.reservaRepository.deleteById(id);
        return new ResponseEntity<Reserva>(HttpStatus.OK);
    }

    @GetMapping(value="/buscaReservaid")
    public ResponseEntity<Reserva> rese(int id) {
        
        return new ResponseEntity<Reserva>(reservaRepository.findById(id), HttpStatus.ACCEPTED);
    }

}

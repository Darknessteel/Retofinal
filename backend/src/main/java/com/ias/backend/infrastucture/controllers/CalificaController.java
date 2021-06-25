package com.ias.backend.infrastucture.controllers;

import com.ias.backend.domain.Califica;
import com.ias.backend.repository.CalificaRepository;

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
@RequestMapping(value="/califica",produces = MediaType.APPLICATION_JSON_VALUE)
public class CalificaController {
    
    private CalificaRepository calificaRepository;


        public CalificaController(CalificaRepository calificaRepository){
        this.calificaRepository = calificaRepository;
    }



    @GetMapping(value="/all")
    public ResponseEntity<Iterable<Califica>> GetAllCalifica(){
        return new ResponseEntity<Iterable<Califica>>(calificaRepository.findAll(), HttpStatus.ACCEPTED);
    }

 
  
    @GetMapping(value="/byusuario")
    public ResponseEntity<Iterable<Califica>> byusuario(String usuario) {
    
        return new ResponseEntity<Iterable<Califica>>(calificaRepository.findByUsuario(usuario),HttpStatus.ACCEPTED);
    }

    @PostMapping(value="/addCalifica")
    public ResponseEntity<Califica> CreateHouse(@RequestBody Califica califica){

        return new ResponseEntity<Califica>(calificaRepository.save(califica), HttpStatus.CREATED);
    }

    @PutMapping(value="/updateC")
    public ResponseEntity<Califica> updateR(@RequestBody Califica califica){
  
        return new ResponseEntity<Califica>(calificaRepository.save(califica), HttpStatus.NO_CONTENT);
    }

}

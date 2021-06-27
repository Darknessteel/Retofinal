package com.ias.backend.infrastucture.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ias.backend.domain.User;
import com.ias.backend.repository.UserRepository;
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value="/user",produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository _userRepository){
        this.userRepository = _userRepository;
    }

    @PostMapping(value="/register")
    public ResponseEntity<User> createUser(@RequestBody User user){
        return new ResponseEntity<User>(userRepository.save(user), HttpStatus.CREATED);
    }

    @GetMapping(value="/prueba")
    public ResponseEntity<Iterable<User>> getAllUser(){
        return new ResponseEntity<Iterable<User>>(userRepository.findAll(), HttpStatus.ACCEPTED);
    }
     
    @GetMapping(value="/login")
    public ResponseEntity<User> getUser(String username,  String password) {
        
        return new ResponseEntity<User>(userRepository.findByUsernameAndPassword(username,password), HttpStatus.ACCEPTED);
    }


    @PutMapping(value="/update")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        return new ResponseEntity<User>(userRepository.save(user), HttpStatus.NO_CONTENT);
    }

}

    



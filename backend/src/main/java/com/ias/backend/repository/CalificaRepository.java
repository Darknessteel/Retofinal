package com.ias.backend.repository;

import com.ias.backend.domain.Califica;

import org.springframework.data.repository.CrudRepository;

public interface CalificaRepository extends CrudRepository<Califica, Integer> {
    Iterable<Califica> findByUsuario(String usuario);
}

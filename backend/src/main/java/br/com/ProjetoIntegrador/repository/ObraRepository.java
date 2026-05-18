package br.com.ProjetoIntegrador.repository;

import br.com.obras.ProjetoIntegrador.entity.Obra;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ObraRepository extends JpaRepository<Obra, Long> {
}
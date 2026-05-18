package br.com.ProjetoIntegrador.repository;

import br.com.ProjetoIntegrador.entity.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
}
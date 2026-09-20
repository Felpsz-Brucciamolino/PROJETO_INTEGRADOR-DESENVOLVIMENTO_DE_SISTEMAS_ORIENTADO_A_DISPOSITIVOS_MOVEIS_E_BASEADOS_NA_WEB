package br.com.ProjetoIntegrador.repository;

import br.com.ProjetoIntegrador.entity.Evidencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EvidenciaRepository extends JpaRepository<Evidencia, Long> {
    List<Evidencia> findByTarefaId(Long tarefaId);
}

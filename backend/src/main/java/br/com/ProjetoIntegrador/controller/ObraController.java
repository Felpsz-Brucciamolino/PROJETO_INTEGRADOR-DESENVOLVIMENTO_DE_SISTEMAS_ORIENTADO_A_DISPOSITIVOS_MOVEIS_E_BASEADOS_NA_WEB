package br.com.ProjetoIntegrador.controller;

import br.com.ProjetoIntegrador.entity.Obra;
import br.com.ProjetoIntegrador.repository.ObraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/obras")
@CrossOrigin(origins = "*")
public class ObraController {

    @Autowired
    private ObraRepository repository;

    @GetMapping
    public List<Map<String, Object>> listar() {
        return repository.findAll().stream().map(o -> {
            Map<String, Object> map = new HashMap<>();
            map.put("id", o.getId());
            map.put("nome", o.getNome());
            map.put("endereco", o.getEndereco());
            map.put("status", o.getStatus());
            map.put("orcamento", o.getOrcamento());
            map.put("data_inicio", o.getDataInicio());
            map.put("data_prevista_fim", o.getPrevisaoEntrega());
            return map;
        }).toList();
    }

    @GetMapping("/{id}")  // 👈 AQUI
    public Obra buscar(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }


    @PostMapping
    public Obra criar(@RequestBody Obra obra){
        return repository.save(obra);
    }

    @PutMapping("/{id}")
    public Obra atualizar(@PathVariable Long id, @RequestBody Obra obra){
        obra.setId(id);
        return repository.save(obra);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id){
        repository.deleteById(id);
    }
}
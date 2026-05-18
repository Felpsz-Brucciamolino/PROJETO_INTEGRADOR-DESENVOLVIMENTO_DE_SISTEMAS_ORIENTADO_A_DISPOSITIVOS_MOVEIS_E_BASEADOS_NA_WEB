package br.com.obras.ProjetoIntegrador.controller;

import br.com.obras.ProjetoIntegrador.entity.Obra;
import br.com.obras.ProjetoIntegrador.repository.ObraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/obras")
@CrossOrigin(origins = "*")
public class ObraController {

    @Autowired
    private ObraRepository repository;

    @GetMapping
    public List<Obra> listar(){
        return repository.findAll();
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
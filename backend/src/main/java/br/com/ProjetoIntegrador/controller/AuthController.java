package br.com.ProjetoIntegrador.controller;

import br.com.obras.ProjetoIntegrador.dto.UsuarioDTO;
import br.com.obras.ProjetoIntegrador.entity.Usuario;
import br.com.obras.ProjetoIntegrador.repository.UsuarioRepository;
import br.com.obras.ProjetoIntegrador.util.HashUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UsuarioDTO dados){

        Usuario usuario = usuarioRepository.findByEmail(dados.email())
                .orElse(null);

        if(usuario == null){
            return ResponseEntity.status(404).body("Usuário não encontrado");
        }

        if(usuario.getSenhaHash().equals(HashUtil.gerarHash(dados.senha()))) {
            return ResponseEntity.ok().body("Login realizado com sucesso");
        }
        
        return ResponseEntity.status(401).body("Senha incorreta");
    }
}
package br.com.ProjetoIntegrador.controller;

import br.com.ProjetoIntegrador.dto.AlterarSenhaDTO;
import br.com.ProjetoIntegrador.dto.AtualizarUsuarioDTO;
import br.com.ProjetoIntegrador.entity.Usuario;
import br.com.ProjetoIntegrador.repository.UsuarioRepository;
import br.com.ProjetoIntegrador.util.HashUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PutMapping("/{id}")
    public ResponseEntity<?> atualizar(@PathVariable Long id, @RequestBody AtualizarUsuarioDTO dados) {
        Usuario usuario = usuarioRepository.findById(id).orElse(null);
        if (usuario == null) {
            return ResponseEntity.notFound().build();
        }

        if (dados.nome() != null && !dados.nome().isBlank()) {
            usuario.setNome(dados.nome());
        }
        if (dados.email() != null && !dados.email().isBlank()) {
            // Verificar se o email ja existe para outro usuario
            Usuario existente = usuarioRepository.findByEmail(dados.email()).orElse(null);
            if (existente != null && !existente.getId().equals(usuario.getId())) {
                return ResponseEntity.status(400).body("E-mail já está em uso");
            }
            usuario.setEmail(dados.email());
        }
        usuario.setAtualizadoEm(LocalDateTime.now());
        Usuario atualizado = usuarioRepository.save(usuario);
        return ResponseEntity.ok(atualizado);
    }

    @PutMapping("/{id}/senha")
    public ResponseEntity<?> alterarSenha(@PathVariable Long id, @RequestBody AlterarSenhaDTO dados) {
        return usuarioRepository.findById(id).map(usuario -> {
            String hashAtual = HashUtil.gerarHash(dados.senhaAtual());
            if (!usuario.getSenhaHash().equals(hashAtual)) {
                return ResponseEntity.status(401).body("Senha atual incorreta");
            }
            
            usuario.setSenhaHash(HashUtil.gerarHash(dados.novaSenha()));
            usuario.setAtualizadoEm(LocalDateTime.now());
            usuarioRepository.save(usuario);
            return ResponseEntity.ok("Senha alterada com sucesso");
        }).orElse(ResponseEntity.notFound().build());
    }
}

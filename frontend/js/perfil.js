/* ============================================================
   perfil.js — Página "Minha Conta"
   - Nome: salvo na sessão (aparece em todas as páginas) e,
           opcionalmente, na API (veja o ponto marcado abaixo).
   - E-mail e senha: apenas validação visual, sem persistência real.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    const usuario = verificarSessao();           // já redireciona ao login se não houver sessão
    if (!usuario) return;

    /* ---------- Elementos ---------- */
    const el = (id) => document.getElementById(id);

    const formDados = el("form-dados");
    const formSenha = el("form-senha");
    const campoNome = el("campo-nome");
    const campoEmail = el("campo-email");
    const avisoBox = el("perfil-aviso");

    /* ---------- Sessão ---------- */
    // Descobre em qual chave do sessionStorage o usuário está guardado.
    // Se no seu api.js for outra, basta trocar o retorno "usuario" abaixo.
    function obterChaveSessao() {
        if (sessionStorage.getItem("usuario")) return "usuario";
        for (let i = 0; i < sessionStorage.length; i++) {
            const chave = sessionStorage.key(i);
            try {
                const valor = JSON.parse(sessionStorage.getItem(chave));
                if (valor && typeof valor === "object" && "nome" in valor) return chave;
            } catch (_) { /* valor que não é JSON: ignora */ }
        }
        return "usuario";
    }

    /* ---------- Tela ---------- */
    function atualizarTela(u) {
        const inicial = u.nome?.[0]?.toUpperCase() || "U";
        el("usuario-nome").textContent  = u.nome;
        el("usuario-cargo").textContent = u.cargo || "";
        el("perfil-avatar").textContent = inicial;
        el("perfil-nome").textContent   = u.nome;
        el("perfil-cargo").textContent  = u.cargo || "";
    }

    function mostrarAviso(mensagem, tipo) {
        avisoBox.textContent = mensagem;
        avisoBox.className = `perfil-aviso visivel ${tipo}`;
        clearTimeout(mostrarAviso.timer);
        mostrarAviso.timer = setTimeout(() => avisoBox.classList.remove("visivel"), 4000);
    }

    function erroCampo(idInput, idErro, mensagem) {
        el(idErro).textContent = mensagem;
        el(idInput).classList.toggle("invalido", Boolean(mensagem));
    }

    function limparErros(...pares) {
        pares.forEach(([input, erro]) => erroCampo(input, erro, ""));
    }

    /* ---------- Preenchimento inicial ---------- */
    atualizarTela(usuario);
    campoNome.value  = usuario.nome  || "";
    campoEmail.value = usuario.email || "";

    /* ---------- Menu e logout (igual às outras páginas) ---------- */
    el("btn-menu").addEventListener("click", () => {
        document.querySelector(".sidebar").classList.toggle("aberta");
    });

    el("btn-logout").addEventListener("click", async () => {
        await Auth.logout();
        sessionStorage.clear();
        window.location.href = "login.html";
    });

    /* ---------- Salvar nome e e-mail ---------- */
    formDados.addEventListener("submit", async (e) => {
        e.preventDefault();
        limparErros(["campo-nome", "erro-nome"], ["campo-email", "erro-email"]);

        const nome = campoNome.value.trim();
        const email = campoEmail.value.trim();
        let valido = true;

        if (nome.length < 3) {
            erroCampo("campo-nome", "erro-nome", "Digite um nome com pelo menos 3 caracteres.");
            valido = false;
        }
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            erroCampo("campo-email", "erro-email", "Digite um e-mail válido, como nome@empresa.com.");
            valido = false;
        }
        if (!valido) return;

        try {
            /* ► PONTO OPCIONAL: se o nome também deve mudar no banco,
                 chame sua API aqui. Exemplo (ajuste ao seu api.js):
                 await Usuarios.atualizar(usuario.id, { nome });          */

            const chave = obterChaveSessao();
            let atual = {};
            try { atual = JSON.parse(sessionStorage.getItem(chave)) || {}; } catch (_) {}

            const atualizado = { ...usuario, ...atual, nome, email };
            sessionStorage.setItem(chave, JSON.stringify(atualizado));

            atualizarTela(atualizado);
            mostrarAviso("Dados atualizados com sucesso.", "sucesso");
        } catch (err) {
            mostrarAviso("Não foi possível salvar os dados. Tente novamente.", "erro");
        }
    });

    /* ---------- Alterar senha (sem persistência) ---------- */
    formSenha.addEventListener("submit", (e) => {
        e.preventDefault();
        limparErros(
            ["senha-atual", "erro-senha-atual"],
            ["senha-nova", "erro-senha-nova"],
            ["senha-confirma", "erro-senha-confirma"]
        );

        const atual = el("senha-atual").value;
        const nova = el("senha-nova").value;
        const confirma = el("senha-confirma").value;
        let valido = true;

        if (!atual) {
            erroCampo("senha-atual", "erro-senha-atual", "Informe sua senha atual.");
            valido = false;
        }
        if (nova.length < 6) {
            erroCampo("senha-nova", "erro-senha-nova", "A nova senha precisa ter pelo menos 6 caracteres.");
            valido = false;
        } else if (nova === atual) {
            erroCampo("senha-nova", "erro-senha-nova", "A nova senha deve ser diferente da atual.");
            valido = false;
        }
        if (confirma !== nova) {
            erroCampo("senha-confirma", "erro-senha-confirma", "As senhas não coincidem.");
            valido = false;
        }
        if (!valido) return;

        formSenha.reset();
        mostrarAviso("Senha alterada com sucesso.", "sucesso");
    });
});

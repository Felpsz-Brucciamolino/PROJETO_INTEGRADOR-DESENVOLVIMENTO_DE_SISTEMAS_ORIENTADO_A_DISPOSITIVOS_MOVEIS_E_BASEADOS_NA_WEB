// logica do dashboard principal

document.addEventListener("DOMContentLoaded", async () => {
    const usuario = verificarSessao();
    if (!usuario) return;

    const elNome = document.getElementById("usuario-nome");
    const elCargo = document.getElementById("usuario-cargo");
    const elAvatar = document.getElementById("usuario-avatar");

    if (elNome) elNome.textContent = usuario.nome;
    if (elCargo) elCargo.textContent = usuario.cargo || "";
    if (elAvatar) elAvatar.textContent = usuario.nome[0]?.toUpperCase() || "U";

    await carregarObras();

    document.getElementById("btn-logout")?.addEventListener("click", () => {
        Auth.logout();
    });

    document.getElementById("btn-menu")?.addEventListener("click", () => {
        document.querySelector(".sidebar").classList.toggle("aberta");
    });
});

async function carregarObras() {
    const totalObrasEl = document.getElementById("total-obras");
    const obrasAndamentoEl = document.getElementById("obras-andamento");
    const totalTarefasEl = document.getElementById("total-tarefas");
    const tarefasPendentesEl = document.getElementById("tarefas-pendentes");
    const lista = document.getElementById("lista-obras-recentes");

    if (!totalObrasEl || !obrasAndamentoEl || !totalTarefasEl || !tarefasPendentesEl || !lista) {
        return;
    }

    const resultado = await ObrasAPI.listar();
    if (!resultado.sucesso) {
        totalObrasEl.textContent = "0";
        obrasAndamentoEl.textContent = "0";
        totalTarefasEl.textContent = "0";
        tarefasPendentesEl.textContent = "0";
        lista.innerHTML = "<p>Não foi possível carregar as obras.</p>";
        return;
    }

    const obras = Array.isArray(resultado.dados) ? resultado.dados : [];
    totalObrasEl.textContent = obras.length;
    obrasAndamentoEl.textContent = obras.filter(o => o.status === "em_andamento").length;
    totalTarefasEl.textContent = "0";
    tarefasPendentesEl.textContent = "0";

    mostrarObrasRecentes(obras);
}

function mostrarObrasRecentes(obras) {
    const lista = document.getElementById("lista-obras-recentes");
    if (!lista) return;

    if (!obras || obras.length === 0) {
        lista.innerHTML = "<p>nenhuma obra cadastrada ainda.</p>";
        return;
    }

    const recentes = obras.slice(0, 5);
    let html = "";

    for (let i = 0; i < recentes.length; i++) {
        const o = recentes[i];
        const data = formatarData(o.data_inicio || o.data_prevista_fim || "");
        html += `
        <div class="obra-item">
            <div>
                <div class="obra-item-nome">${o.nome || "Sem nome"}</div>
                <div class="obra-item-data">${data}</div>
            </div>
        </div>`;
    }

    lista.innerHTML = html;
}

function formatarData(valor) {
    if (!valor) return "";
    const data = new Date(valor);
    if (Number.isNaN(data.getTime())) {
        return valor;
    }
    return data.toLocaleDateString("pt-BR");
}

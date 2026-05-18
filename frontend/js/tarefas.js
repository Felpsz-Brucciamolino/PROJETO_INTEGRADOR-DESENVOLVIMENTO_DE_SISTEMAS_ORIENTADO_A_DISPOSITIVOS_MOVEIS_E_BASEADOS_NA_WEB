document.addEventListener("DOMContentLoaded", async () => {
    verificarSessao();

    await preencherObras();
    await carregarTarefas();

    inicializarEventos();
});

// ==========================
// INICIALIZA EVENTOS
// ==========================
function inicializarEventos() {
    document.getElementById("btn-nova-tarefa")
        .addEventListener("click", abrirModalNova);

    document.getElementById("btn-cancelar")
        .addEventListener("click", fecharModal);

    document.getElementById("form-tarefa")
        .addEventListener("submit", salvarTarefa);

    document.getElementById("busca")
        .addEventListener("input", carregarTarefas);

    document.getElementById("filtro-obra")
        .addEventListener("change", carregarTarefas);

    document.getElementById("filtro-status")
        .addEventListener("change", carregarTarefas);

    document.getElementById("filtro-prioridade")
        .addEventListener("change", carregarTarefas);
}

// ==========================
// CARREGAR TAREFAS
// ==========================
async function carregarTarefas() {
    try {
        const res = await TarefasAPI.listar();

        if (!res.sucesso) {
            console.error("Erro ao carregar tarefas");
            return;
        }

        let tarefas = res.dados;

        const busca = document.getElementById("busca").value.toLowerCase();
        const obra = document.getElementById("filtro-obra").value;
        const status = document.getElementById("filtro-status").value;
        const prioridade = document.getElementById("filtro-prioridade").value;

        tarefas = tarefas.filter(tarefa => {
            const matchBusca =
                !busca ||
                tarefa.titulo?.toLowerCase().includes(busca) ||
                tarefa.responsavel?.toLowerCase().includes(busca) ||
                tarefa.obra?.nome?.toLowerCase().includes(busca);

            const matchObra =
                !obra || tarefa.obra?.id == obra;

            const matchStatus =
                !status || tarefa.status === status;

            const matchPrioridade =
                !prioridade || tarefa.prioridade === prioridade;

            return matchBusca && matchObra && matchStatus && matchPrioridade;
        });

        limparColunas();

        const contadores = {
            pendente: 0,
            em_andamento: 0,
            concluida: 0,
            cancelada: 0
        };

        tarefas.forEach(tarefa => {
            const coluna = document.getElementById(`col-${tarefa.status}`);

            if (!coluna) return;

            coluna.appendChild(criarCard(tarefa));

            contadores[tarefa.status]++;
        });

        atualizarContadores(contadores);

    } catch (err) {
        console.error("Erro ao carregar tarefas:", err);
    }
}

// ==========================
// LIMPAR COLUNAS
// ==========================
function limparColunas() {
    document.querySelectorAll(".kanban-cards")
        .forEach(col => col.innerHTML = "");
}

// ==========================
// CONTADORES
// ==========================
function atualizarContadores(contadores) {
    document.getElementById("count-pendente").textContent = contadores.pendente;
    document.getElementById("count-em_andamento").textContent = contadores.em_andamento;
    document.getElementById("count-concluida").textContent = contadores.concluida;
    document.getElementById("count-cancelada").textContent = contadores.cancelada;
}

// ==========================
// CRIAR CARD
// ==========================
function criarCard(tarefa) {
    const div = document.createElement("div");

    div.className = `tarefa-card prioridade-${tarefa.prioridade}`;

    div.innerHTML = `
        <div class="tarefa-titulo">${tarefa.titulo}</div>

        <div class="tarefa-descricao">
            ${tarefa.descricao || "Sem descrição"}
        </div>

        <div class="tarefa-meta">
            <span>👤 ${tarefa.responsavel || "Não definido"}</span>
            <span>📅 ${formatarData(tarefa.prazo)}</span>
        </div>

        <div class="card-actions">
            <button onclick="expandirTarefa(${tarefa.id})">Ver</button>
            <button onclick="editarTarefa(${tarefa.id})">Editar</button>
            <button onclick="deletarTarefa(${tarefa.id})">Excluir</button>
        </div>
    `;

    return div;
}

// ==========================
// MODAL NOVA
// ==========================
function abrirModalNova() {
    const form = document.getElementById("form-tarefa");

    form.reset();
    form.dataset.editando = "";

    document.getElementById("modal-titulo").textContent = "Nova Tarefa";

    document.getElementById("modal-tarefa").style.display = "flex";
}

// ==========================
// FECHAR MODAL
// ==========================
function fecharModal() {
    document.getElementById("modal-tarefa").style.display = "none";
}

// ==========================
// SALVAR (CRIAR / EDITAR)
// ==========================
async function salvarTarefa(e) {
    e.preventDefault();

    const form = e.target;
    const idEditando = form.dataset.editando;

    const dados = {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        status: form.status.value,
        prioridade: form.prioridade.value,
        responsavel: form.responsavel.value,
        prazo: form.prazo.value,
        obra: {
            id: Number(form.obra_id.value)
        }
    };

    let res;

    if (idEditando) {
        res = await TarefasAPI.atualizar(Number(idEditando), dados);
    } else {
        res = await TarefasAPI.criar(dados);
    }

    if (!res.sucesso) {
        alert("Erro ao salvar tarefa");
        return;
    }

    fecharModal();
    await carregarTarefas();
}

// ==========================
// EDITAR
// ==========================
async function editarTarefa(id) {
    const res = await TarefasAPI.listar();

    if (!res.sucesso) return;

    const tarefa = res.dados.find(t => t.id === id);

    if (!tarefa) return;

    const form = document.getElementById("form-tarefa");

    form.dataset.editando = id;

    form.titulo.value = tarefa.titulo;
    form.descricao.value = tarefa.descricao || "";
    form.status.value = tarefa.status;
    form.prioridade.value = tarefa.prioridade;
    form.responsavel.value = tarefa.responsavel || "";
    form.prazo.value = tarefa.prazo || "";
    form.obra_id.value = tarefa.obra?.id || "";

    document.getElementById("modal-titulo").textContent = "Editar Tarefa";

    document.getElementById("modal-tarefa").style.display = "flex";
}

// ==========================
// DELETAR
// ==========================
async function deletarTarefa(id) {
    if (!confirm("Deseja realmente excluir essa tarefa?")) return;

    const res = await TarefasAPI.deletar(id);

    if (!res.sucesso) {
        alert("Erro ao deletar tarefa");
        return;
    }

    await carregarTarefas();
}

// ==========================
// EXPANDIR DETALHES
// ==========================
async function expandirTarefa(id) {
    const res = await TarefasAPI.listar();

    if (!res.sucesso) return;

    const tarefa = res.dados.find(t => t.id === id);

    if (!tarefa) return;

    let modal = document.getElementById("modal-detalhe");

    if (!modal) {
        modal = document.createElement("div");
        modal.id = "modal-detalhe";
        modal.className = "modal-overlay";
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <h2>${tarefa.titulo}</h2>
                <button class="modal-fechar" onclick="fecharDetalhe()">✕</button>
            </div>

            <div class="modal-body">
                <p><strong>Descrição:</strong> ${tarefa.descricao || "Sem descrição"}</p>
                <p><strong>Status:</strong> ${formatStatus(tarefa.status)}</p>
                <p><strong>Prioridade:</strong> ${tarefa.prioridade}</p>
                <p><strong>Responsável:</strong> ${tarefa.responsavel || "—"}</p>
                <p><strong>Prazo:</strong> ${formatarData(tarefa.prazo)}</p>
                <p><strong>Obra:</strong> ${tarefa.obra?.nome || "—"}</p>
            </div>
        </div>
    `;

    modal.style.display = "flex";
}

// ==========================
// FECHAR DETALHE
// ==========================
function fecharDetalhe() {
    const modal = document.getElementById("modal-detalhe");

    if (modal) modal.style.display = "none";
}

// ==========================
// FORMATAR STATUS
// ==========================
function formatStatus(status) {
    const map = {
        pendente: "Pendente",
        em_andamento: "Em andamento",
        concluida: "Concluída",
        cancelada: "Cancelada"
    };

    return map[status] || status;
}

// ==========================
// FORMATAR DATA
// ==========================
function formatarData(data) {
    if (!data) return "Sem prazo";

    return new Date(data).toLocaleDateString("pt-BR");
}
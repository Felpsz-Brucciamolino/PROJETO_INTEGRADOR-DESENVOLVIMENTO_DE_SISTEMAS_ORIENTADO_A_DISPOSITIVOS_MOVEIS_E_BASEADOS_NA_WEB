document.addEventListener("DOMContentLoaded", async () => {
    verificarSessao();

    await carregarRelatorios();

    document.getElementById("filtro-obra")
        .addEventListener("change", carregarRelatorios);
});

// ==========================
// CARREGAR RELATÓRIOS
// ==========================
async function carregarRelatorios() {
    try {
        const obrasRes = await ObrasAPI.listar();
        const tarefasRes = await TarefasAPI.listar();

        if (!obrasRes.sucesso || !tarefasRes.sucesso) {
            console.error("Erro ao carregar dados");
            return;
        }

        const obras = obrasRes.dados;
        const tarefas = tarefasRes.dados;

        preencherFiltro(obras);

        const obraSelecionada = document.getElementById("filtro-obra").value;

        atualizarKPIs(obras, tarefas);

        renderGraficoObras(obras);
        renderGraficoTarefas(tarefas);

        if (obraSelecionada) {
            renderTabelaObra(Number(obraSelecionada), tarefas);
        }

    } catch (err) {
        console.error("Erro:", err);
    }
}

// ==========================
// FILTRO
// ==========================
function preencherFiltro(obras) {
    const select = document.getElementById("filtro-obra");

    if (select.options.length > 1) return;

    obras.forEach(obra => {
        const option = document.createElement("option");
        option.value = obra.id;
        option.textContent = obra.nome;
        select.appendChild(option);
    });
}

// ==========================
// KPI
// ==========================
function atualizarKPIs(obras, tarefas) {
    document.getElementById("kpi-total-obras").textContent = obras.length;

    document.getElementById("kpi-andamento").textContent =
        obras.filter(o => o.status === "em_andamento").length;

    document.getElementById("kpi-concluidas").textContent =
        obras.filter(o => o.status === "concluida").length;

    document.getElementById("kpi-total-tarefas").textContent =
        tarefas.length;
}

// ==========================
// GRÁFICO OBRAS
// ==========================
function renderGraficoObras(obras) {
    const area = document.getElementById("grafico-obras");

    const contagem = {
        pendente: 0,
        em_andamento: 0,
        concluida: 0,
        cancelada: 0
    };

    obras.forEach(o => {
        if (contagem[o.status] !== undefined) {
            contagem[o.status]++;
        }
    });

    area.innerHTML = gerarBarras(contagem);
}

// ==========================
// GRÁFICO TAREFAS
// ==========================
function renderGraficoTarefas(tarefas) {
    const area = document.getElementById("grafico-tarefas");

    const contagem = {
        pendente: 0,
        em_andamento: 0,
        concluida: 0,
        cancelada: 0
    };

    tarefas.forEach(t => {
        if (contagem[t.status] !== undefined) {
            contagem[t.status]++;
        }
    });

    area.innerHTML = gerarBarras(contagem);
}

// ==========================
// GERAR BARRAS
// ==========================
function gerarBarras(dados) {
    const max = Math.max(...Object.values(dados), 1);

    const cores = {
        pendente: "laranja",
        em_andamento: "azul",
        concluida: "verde",
        cancelada: "vermelho"
    };

    const labels = {
        pendente: "Pendente",
        em_andamento: "Andamento",
        concluida: "Concluída",
        cancelada: "Cancelada"
    };

    return Object.entries(dados).map(([status, valor]) => `
        <div class="barra-grupo">
            <div class="barra ${cores[status]}"
                 style="height:${(valor / max) * 180}px"></div>
            <div class="barra-valor">${valor}</div>
            <div class="barra-label">${labels[status]}</div>
        </div>
    `).join("");
}

// ==========================
// TABELA POR OBRA
// ==========================
function renderTabelaObra(obraId, tarefas) {
    const tbody = document.getElementById("tabela-tarefas-body");

    const tarefasObra = tarefas.filter(t => t.obra?.id === obraId);

    tbody.innerHTML = "";

    tarefasObra.forEach(t => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${t.titulo}</td>
            <td>${formatStatus(t.status)}</td>
            <td>${capitalizar(t.prioridade)}</td>
            <td>${t.responsavel || "—"}</td>
            <td>${formatarData(t.prazo)}</td>
        `;

        tbody.appendChild(tr);
    });

    if (tarefasObra.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center;padding:20px">
                    Nenhuma tarefa encontrada
                </td>
            </tr>
        `;
    }
}

// ==========================
// FORMATOS
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

function formatarData(data) {
    if (!data) return "—";

    return new Date(data).toLocaleDateString("pt-BR");
}

function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}
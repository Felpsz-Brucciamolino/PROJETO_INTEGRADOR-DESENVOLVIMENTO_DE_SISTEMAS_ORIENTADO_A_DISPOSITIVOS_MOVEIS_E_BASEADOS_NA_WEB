// dados de teste pra usar sem o backend rodando
// descomenta a linha ativarModoTeste() la embaixo pra usar

const dadosTeste = {
    usuario: {
        id: 1,
        nome: "Admin Teste",
        email: "admin@obras.com",
        cargo: "admin"
    },
    obras: [
        {
            id: 1,
            nome: "Residencial Parque Verde",
            endereco: "Rua das Flores, 123 - São Paulo/SP",
            status: "em_andamento",
            orcamento: 2500000,
            data_inicio: "2024-01-15",
            data_prevista_fim: "2025-06-30"
        },
        {
            id: 2,
            nome: "Reforma Escola Municipal",
            endereco: "Av. Principal, 456 - Guarulhos/SP",
            status: "planejamento",
            orcamento: 450000,
            data_inicio: "2024-03-01",
            data_prevista_fim: "2024-09-01"
        }
    ],
    tarefas: [
        { id: 1, titulo: "Fundação bloco A", status: "concluida", prioridade: "alta", obra_id: 1, responsavel: "João", prazo: "2024-02-20" },
        { id: 2, titulo: "Instalação elétrica", status: "em_andamento", prioridade: "media", obra_id: 1, responsavel: "Carlos", prazo: "2024-04-15" }
    ]
};

function ativarModoTeste() {
    sessionStorage.setItem("usuario", JSON.stringify(dadosTeste.usuario));
    console.log("modo teste ativado");
}

// ativarModoTeste();

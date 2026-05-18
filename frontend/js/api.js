const BASE_URL = "http://localhost:5030";

function montarOpcoes(metodo, corpo) {
    const opcoes = {
        method: metodo,
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (corpo) {
        opcoes.body = JSON.stringify(corpo);
    }

    return opcoes;
}

async function chamarAPI(url, opcoes) {
    try {
        const resp = await fetch(BASE_URL + url, opcoes);

        const texto = await resp.text();

        let dados;
        try {
            dados = JSON.parse(texto);
        } catch {
            dados = texto;
        }

        if (!resp.ok) {
            const mensagemErro = typeof dados === "string"
                ? dados
                : dados?.message || JSON.stringify(dados);
            throw new Error(mensagemErro || "Erro na requisição");
        }

        return {
            sucesso: true,
            dados
        };

    } catch (err) {
        const mensagem = err?.message || String(err);
        console.error(`Erro em ${url}:`, mensagem);

        return {
            sucesso: false,
            erro: mensagem
        };
    }
}

function verificarSessao() {
    const texto = sessionStorage.getItem("usuario");
    if (!texto) {
        window.location.href = "login.html";
        return null;
    }

    try {
        return JSON.parse(texto);
    } catch {
        sessionStorage.clear();
        window.location.href = "login.html";
        return null;
    }
}

const Auth = {
async login(email, senha) {
    const res = await chamarAPI("/login", montarOpcoes("POST", { email, senha }));
        if (!res.sucesso) {
            return res;
        }

        return {
            sucesso: true,
            dados: {
                usuario: {
                    nome: email.split("@")[0],
                    email
                }
            }
        };
    },

    logout() {
        sessionStorage.clear();
        window.location.href = "login.html";
    }
};

const ObrasAPI = {
    async listar() {
        return chamarAPI("/obras", montarOpcoes("GET"));
    },

    async buscar(id) {
    return chamarAPI(`/obras/${id}`, montarOpcoes("GET"));
},

    async criar(dados) {
        return chamarAPI("/obras", montarOpcoes("POST", dados));
    },

    async atualizar(id, dados) {
        return chamarAPI(`/obras/${id}`, montarOpcoes("PUT", dados));
    },
    

    async deletar(id) {
        return chamarAPI(`/obras/${id}`, montarOpcoes("DELETE"));
    }

    

};

const TarefasAPI = {
    async listar() {
        return chamarAPI("/tarefas", montarOpcoes("GET"));
    },

    async criar(dados) {
        return chamarAPI("/tarefas", montarOpcoes("POST", dados));
    },

    async atualizar(id, dados) {
        return chamarAPI(`/tarefas/${id}`, montarOpcoes("PUT", dados));
    },

    async deletar(id) {
        return chamarAPI(`/tarefas/${id}`, montarOpcoes("DELETE"));
    }
};

async function preencherObras() {
    const res = await ObrasAPI.listar();
    if (!res.sucesso) return;

    const selects = document.querySelectorAll(".select-obra");
    const obras = Array.isArray(res.dados) ? res.dados : [];

    selects.forEach(sel => {
        sel.innerHTML = '<option value="">Todas as obras</option>';

        obras.forEach(o => {
            sel.innerHTML += `<option value="${o.id}">${o.nome || "Obra"}</option>`;
        });
    });
}



function formatarData(valor) {
    if (!valor) return "";
    const data = new Date(valor);
    if (Number.isNaN(data.getTime())) {
        return valor;
    }
    return data.toLocaleDateString("pt-BR");
}

function formatarMoeda(valor) {
    if (valor === null || valor === undefined || valor === "") return "R$ 0,00";
    const numero = Number(valor);
    if (Number.isNaN(numero)) return String(valor);
    return numero.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function classBadge(status) {
    if (!status) return "";
    return String(status).replace(/_/g, "-");
}

function labelStatus(status) {
    const map = {
        planejamento: "Planejamento",
        em_andamento: "Em Andamento",
        pausada: "Pausada",
        concluida: "Concluída",
        cancelada: "Cancelada",
        pendente: "Pendente"
    };
    return map[status] || status || "";
}

function toast(mensagem, tipo = "info") {
    const container = document.getElementById("toast-container");
    if (!container) {
        alert(mensagem);
        return;
    }

    const el = document.createElement("div");
    el.className = `toast ${tipo}`;
    el.textContent = mensagem;
    container.appendChild(el);

    setTimeout(() => {
        el.remove();
    }, 4000);
}
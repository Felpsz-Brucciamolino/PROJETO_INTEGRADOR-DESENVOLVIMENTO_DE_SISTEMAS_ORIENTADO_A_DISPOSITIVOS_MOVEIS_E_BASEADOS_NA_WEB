const BASE_URL = "http://localhost:5030";

// --- PWA: Service Worker Registration ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

// --- Offline Queue Logic ---
const OFFLINE_QUEUE_KEY = 'gerobras_offline_queue';

function getOfflineQueue() {
    return JSON.parse(localStorage.getItem(OFFLINE_QUEUE_KEY) || '[]');
}

function saveToOfflineQueue(request) {
    const queue = getOfflineQueue();
    queue.push(request);
    localStorage.setItem(OFFLINE_QUEUE_KEY, JSON.stringify(queue));
    console.log("Requisição salva offline:", request);
}

async function syncOfflineQueue() {
    const queue = getOfflineQueue();
    if (queue.length === 0) return;
    
    console.log(`Sincronizando ${queue.length} requisições offline...`);
    const remainingQueue = [];
    
    for (const req of queue) {
        try {
            await fetch(BASE_URL + req.endpoint, req.options);
            console.log("Sincronizado:", req.endpoint);
        } catch (error) {
            remainingQueue.push(req);
        }
    }
    
    localStorage.setItem(OFFLINE_QUEUE_KEY, JSON.stringify(remainingQueue));
}

window.addEventListener('online', syncOfflineQueue);

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

async function chamarAPI(endpoint, opcoes = {}) {
    try {
        const resp = await fetch(BASE_URL + endpoint, opcoes);

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

    } catch (erro) {
        console.error(`Erro em ${endpoint}:`, erro);
        
        // Se falhou por erro de rede (Failed to fetch) e for mutação, salva offline
        if (erro instanceof TypeError && opcoes.method && opcoes.method !== 'GET') {
            saveToOfflineQueue({ endpoint, options: opcoes, id: Date.now() });
            return { sucesso: true, dados: { offline: true }, offline: true };
        }

        return { sucesso: false, erro: erro.message };
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
                usuario: res.dados
            }
        };
    },

    logout() {
        sessionStorage.clear();
        window.location.href = "login.html";
    }
};

const UsuariosAPI = {
    async atualizar(id, dados) {
        return chamarAPI(`/usuarios/${id}`, montarOpcoes("PUT", dados));
    },

    async alterarSenha(id, dados) {
        return chamarAPI(`/usuarios/${id}/senha`, montarOpcoes("PUT", dados));
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
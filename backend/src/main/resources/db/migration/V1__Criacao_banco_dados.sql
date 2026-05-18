
CREATE TYPE cargo_usuario AS ENUM (
    'admin',
    'engenheiro',
    'mestre_de_obras',
    'operario'
);

CREATE TYPE status_obra AS ENUM (
    'planejamento',
    'em_andamento',
    'pausada',
    'concluida',
    'cancelada'
);

CREATE TYPE status_tarefa AS ENUM (
    'pendente',
    'em_andamento',
    'concluida',
    'cancelada'
);

CREATE TYPE prioridade_tarefa AS ENUM (
    'baixa',
    'media',
    'alta',
    'urgente'
);

CREATE TABLE IF NOT EXISTS usuarios (
                                        id SERIAL PRIMARY KEY,
                                        nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(64) NOT NULL,
    cargo cargo_usuario DEFAULT 'operario',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE IF NOT EXISTS obras (
                                     id SERIAL PRIMARY KEY,
                                     nome VARCHAR(150) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    status status_obra DEFAULT 'planejamento',
    descricao TEXT,
    orcamento DECIMAL(15,2) DEFAULT 0.00,
    data_inicio DATE,
    data_prevista_fim DATE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE IF NOT EXISTS tarefas (
                                       id SERIAL PRIMARY KEY,
                                       titulo VARCHAR(150) NOT NULL,
    descricao TEXT,
    status status_tarefa DEFAULT 'pendente',
    prioridade prioridade_tarefa DEFAULT 'media',
    obra_id INT NOT NULL,
    responsavel VARCHAR(100),
    prazo DATE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_obra
    FOREIGN KEY (obra_id)
    REFERENCES obras(id)
    ON DELETE CASCADE
    );
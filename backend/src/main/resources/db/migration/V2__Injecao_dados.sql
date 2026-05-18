
INSERT INTO usuarios (nome, email, senha, cargo)
VALUES (
           'Administrador',
           'admin@obras.com',
           '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9',
           'admin'
       );

INSERT INTO obras (
    nome,
    endereco,
    status,
    descricao,
    orcamento,
    data_inicio,
    data_prevista_fim
)
VALUES
    (
        'Residencial Parque Verde',
        'Rua das Flores, 123 - São Paulo/SP',
        'em_andamento',
        'Condomínio residencial com 4 blocos e 80 apartamentos',
        2500000.00,
        '2024-01-15',
        '2025-06-30'
    ),
    (
        'Reforma Escola Municipal',
        'Av. Principal, 456 - Guarulhos/SP',
        'planejamento',
        'Reforma completa da estrutura e elétrica',
        450000.00,
        '2024-03-01',
        '2024-09-01'
    ),
    (
        'Galpão Industrial Norte',
        'Rod. Dutra km 221 - Guarulhos/SP',
        'concluida',
        'Construção de galpão logístico 5000m²',
        1800000.00,
        '2023-06-01',
        '2024-02-28'
    );

INSERT INTO tarefas (
    titulo,
    descricao,
    status,
    prioridade,
    obra_id,
    responsavel,
    prazo
)
VALUES
    (
        'Fundação bloco A',
        'Concretagem das sapatas do bloco A',
        'concluida',
        'alta',
        1,
        'João Mestre',
        '2024-02-20'
    ),
    (
        'Instalação elétrica andar 1',
        'Passar fiação e instalar quadros',
        'em_andamento',
        'media',
        1,
        'Carlos Eletricista',
        '2024-04-15'
    ),
    (
        'Levantamento topográfico',
        'Medição e nivelamento do terreno',
        'concluida',
        'alta',
        2,
        'Ana Engenheira',
        '2024-02-10'
    ),
    (
        'Compra de materiais',
        'Cimento, areia, brita e blocos',
        'pendente',
        'media',
        2,
        'Marcos Almoxarife',
        '2024-03-05'
    ),
    (
        'Vistoria final',
        'Inspeção geral antes da entrega',
        'concluida',
        'urgente',
        3,
        'Roberto Engenheiro',
        '2024-02-25'
    );
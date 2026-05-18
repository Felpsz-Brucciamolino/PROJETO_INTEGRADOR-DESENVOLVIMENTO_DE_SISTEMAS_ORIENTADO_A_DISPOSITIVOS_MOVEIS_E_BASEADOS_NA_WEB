
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
    ),
    (
        'Centro Comercial Horizonte',
        'Av. Paulista, 1200 - São Paulo/SP',
        'em_andamento',
        'Construção de centro comercial com 6 pavimentos',
        4200000.00,
        '2024-02-10',
        '2025-11-20'
    ),
    (
        'Hospital Vida Nova',
        'Rua da Saúde, 88 - Campinas/SP',
        'planejamento',
        'Construção de hospital regional com 120 leitos',
        8500000.00,
        '2024-06-01',
        '2026-03-15'
    ),
    (
        'Ponte Rio Azul',
        'BR-116 km 340 - Curitiba/PR',
        'em_andamento',
        'Construção de ponte rodoviária',
        6700000.00,
        '2024-01-05',
        '2025-08-30'
    ),
    (
        'Shopping Bela Vista',
        'Av. Central, 900 - Belo Horizonte/MG',
        'concluida',
        'Ampliação e modernização da ala norte',
        3100000.00,
        '2023-04-01',
        '2024-01-20'
    ),
    (
        'Condomínio Solar das Palmeiras',
        'Rua das Acácias, 450 - Curitiba/PR',
        'pausada',
        'Construção de condomínio residencial com 5 torres',
        5900000.00,
        '2024-03-18',
        '2026-01-10'
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
    ),
    (
        'Estrutura metálica pavimento 2',
        'Montagem das vigas estruturais',
        'em_andamento',
        'alta',
        4,
        'Fernando Estruturas',
        '2024-07-15'
    ),
    (
        'Instalação hidráulica térreo',
        'Rede principal de abastecimento',
        'pendente',
        'media',
        4,
        'Paulo Encanador',
        '2024-08-10'
    ),
    (
        'Terraplanagem final',
        'Nivelamento completo',
        'concluida',
        'alta',
        4,
        'Ricardo Operador',
        '2024-03-22'
    ),

    (
        'Análise estrutural inicial',
        'Avaliação do solo',
        'concluida',
        'urgente',
        5,
        'Camila Engenheira',
        '2024-05-12'
    ),
    (
        'Licenciamento ambiental',
        'Envio da documentação',
        'em_andamento',
        'alta',
        5,
        'Bruno Fiscal',
        '2024-06-30'
    ),
    (
        'Orçamento de equipamentos',
        'Cotação hospitalar',
        'pendente',
        'media',
        5,
        'Renata Compras',
        '2024-07-20'
    ),

    (
        'Concretagem da base central',
        'Aplicação do concreto armado',
        'concluida',
        'alta',
        6,
        'José Concretista',
        '2024-03-01'
    ),
    (
        'Montagem de pilares',
        'Fixação estrutural',
        'em_andamento',
        'urgente',
        6,
        'Marcos Estrutural',
        '2024-06-18'
    ),
    (
        'Inspeção técnica',
        'Avaliação de segurança',
        'pendente',
        'media',
        6,
        'Tatiane Fiscal',
        '2024-07-05'
    ),

    (
        'Instalação de escadas rolantes',
        'Montagem dos equipamentos',
        'concluida',
        'alta',
        7,
        'Luciano Mecânico',
        '2023-11-12'
    ),
    (
        'Pintura interna ala norte',
        'Acabamento premium',
        'concluida',
        'media',
        7,
        'Eduardo Pintor',
        '2023-12-05'
    ),
    (
        'Teste de iluminação',
        'Validação elétrica',
        'cancelada',
        'baixa',
        7,
        'Felipe Técnico',
        '2024-01-05'
    ),

    (
        'Fundação torre B',
        'Escavação e concretagem',
        'em_andamento',
        'urgente',
        8,
        'Carlos Mestre',
        '2024-06-25'
    ),
    (
        'Compra de aço estrutural',
        'Aquisição de material',
        'pendente',
        'alta',
        8,
        'Márcio Compras',
        '2024-07-08'
    ),
    (
        'Aprovação da prefeitura',
        'Liberação documental',
        'cancelada',
        'media',
        8,
        'Juliana Jurídico',
        '2024-05-30'
    ),(
        'Revestimento fachada bloco B',
        'Aplicação de revestimento externo',
        'pendente',
        'media',
        1,
        'André Fachadista',
        '2024-08-14'
    ),
    (
        'Instalação elevadores',
        'Montagem dos elevadores principais',
        'em_andamento',
        'alta',
        1,
        'Ricardo Elevadores',
        '2024-09-05'
    ),

    (
        'Reforço estrutural ginásio',
        'Execução das vigas metálicas',
        'em_andamento',
        'alta',
        2,
        'Pedro Estrutural',
        '2024-04-12'
    ),
    (
        'Pintura salas de aula',
        'Acabamento interno completo',
        'pendente',
        'baixa',
        2,
        'Marcelo Pintor',
        '2024-05-18'
    ),

    (
        'Instalação docas logísticas',
        'Montagem das plataformas de carga',
        'concluida',
        'media',
        3,
        'Sérgio Logística',
        '2024-01-18'
    ),
    (
        'Teste de iluminação externa',
        'Validação do sistema LED',
        'concluida',
        'baixa',
        3,
        'Alan Técnico',
        '2024-02-10'
    ),

    (
        'Impermeabilização cobertura',
        'Aplicação da manta térmica',
        'pendente',
        'alta',
        4,
        'Diego Coberturas',
        '2024-09-01'
    ),
    (
        'Instalação de esquadrias',
        'Fixação de portas e janelas',
        'em_andamento',
        'media',
        4,
        'Lucas Serralheiro',
        '2024-08-22'
    ),

    (
        'Definição layout UTI',
        'Planejamento da estrutura interna',
        'pendente',
        'urgente',
        5,
        'Fernanda Projetista',
        '2024-08-03'
    ),
    (
        'Cotação geradores',
        'Pesquisa e análise de fornecedores',
        'em_andamento',
        'media',
        5,
        'Leandro Compras',
        '2024-07-28'
    ),

    (
        'Soldagem travessas metálicas',
        'Fixação da estrutura principal',
        'em_andamento',
        'alta',
        6,
        'Márcio Soldador',
        '2024-06-29'
    ),
    (
        'Sinalização provisória',
        'Instalação de placas de segurança',
        'concluida',
        'baixa',
        6,
        'Robson Segurança',
        '2024-04-10'
    ),

    (
        'Revisão sistema de climatização',
        'Teste e ajuste final',
        'concluida',
        'media',
        7,
        'Otávio Climatização',
        '2024-01-08'
    ),
    (
        'Adequação praça de alimentação',
        'Modernização do espaço interno',
        'concluida',
        'alta',
        7,
        'Bruna Arquitetura',
        '2023-12-18'
    ),

    (
        'Regularização documental',
        'Atualização de licenças municipais',
        'pendente',
        'media',
        8,
        'Patrícia Jurídico',
        '2024-07-15'
    ),
    (
        'Revisão orçamento torre C',
        'Replanejamento financeiro',
        'em_andamento',
        'alta',
        8,
        'Vinícius Financeiro',
        '2024-06-30'
    );;
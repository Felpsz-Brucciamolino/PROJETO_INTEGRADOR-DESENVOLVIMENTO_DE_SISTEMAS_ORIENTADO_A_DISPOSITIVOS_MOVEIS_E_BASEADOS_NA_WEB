# Sistema de Gerenciamento de Obras da Construção Civil

<div align="center">

![Status](https://img.shields.io/badge/status-em_desenvolvimento-yellow)
![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.0.6-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)
![License](https://img.shields.io/badge/license-MIT-blue)

**Sistema completo para gerenciamento de obras de construção civil**

---

**Projeto Integrador desenvolvido para o curso de Tecnologia em Análise e Desenvolvimento de Sistemas (4º período) do SENAC EAD.**

Este projeto tem como objetivo aplicar, de forma prática, os conhecimentos adquiridos em desenvolvimento full stack, modelagem de banco de dados, arquitetura de software e boas práticas de engenharia de software, por meio da construção de um sistema de gerenciamento de obras da construção civil.

[Documentação](#documentação) • [API](#api-endpoints) • [Instalação](#como-instalar) • [Contribuição](#como-contribuir)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Como Instalar](#como-instalar)
- [Como Executar](#como-executar)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [API Endpoints](#api-endpoints)
- [Banco de Dados](#banco-de-dados)
- [Exemplos de Uso](#exemplos-de-uso)
- [Roadmap](#roadmap)
- [Contribuição](#como-contribuir)
- [Licença](#licença)
- [Autores](#autores)
- [Contato](#contato)

---

## 🎯 Sobre o Projeto

O **Sistema de Gerenciamento de Obras da Construção Civil** é uma aplicação full-stack desenvolvida para facilitar o controle e administração de projetos de construção. O sistema permite o cadastro de obras, gestão de tarefas, controle de usuários e geração de relatórios, proporcionando uma visão completa do progresso de cada projeto.

### Problema que Resolve

A construção civil frequentemente enfrenta desafios na gestão de múltiplos projetos simultâneos, incluindo:
- Falta de centralização das informações das obras
- Dificuldade no acompanhamento de tarefas e prazos
- Controle inadequado de orçamentos e recursos
- Falta de visibilidade sobre o status dos projetos

Este sistema resolve esses problemas oferecendo uma plataforma integrada para gerenciar todos os aspectos de uma obra de construção civil.

### Público-Alvo

- Empresas de construção civil
- Engenheiros e arquitetos
- Mestres de obras
- Gerentes de projeto
- Equipes de construção

---

## ✨ Funcionalidades

### Gestão de Obras
- ✅ Cadastro de novas obras com informações completas
- ✅ Controle de orçamentos e prazos
- ✅ Acompanhamento do status das obras (planejamento, em andamento, pausada, concluída, cancelada)
- ✅ Vinculação de responsáveis por obra
- ✅ Edição e exclusão de obras

### Gestão de Tarefas
- ✅ Criação de tarefas vinculadas a obras
- ✅ Definição de prioridades (baixa, média, alta, urgente)
- ✅ Controle de status das tarefas (pendente, em andamento, concluída, cancelada)
- ✅ Atribuição de responsáveis
- ✅ Definição de prazos para conclusão
- ✅ Edição e exclusão de tarefas

### Gestão de Usuários
- ✅ Cadastro de usuários com diferentes perfis (admin, engenheiro, mestre de obras, operário)
- ✅ Autenticação segura com hash de senhas
- ✅ Controle de acesso baseado em perfis
- ✅ Ativação/desativação de usuários

### Relatórios e Dashboard
- ✅ Dashboard com visão geral das obras
- ✅ Relatórios de progresso das tarefas
- ✅ Análise de status e prazos
- ✅ Visualização de métricas importantes

### Diferenciais do Projeto
- 🚀 Arquitetura RESTful moderna
- 🔒 Segurança com Spring Security
- 📊 Migrations automáticas com Flyway
- 🎨 Interface responsiva e intuitiva
- 🔄 CORS configurado para integração frontend
- 📦 Código organizado seguindo boas práticas

---

## 🛠 Tecnologias

### Backend
- **Java 17** - Linguagem de programação
- **Spring Boot 4.0.6** - Framework principal
- **Spring Data JPA** - Persistência de dados
- **Spring Security** - Segurança da aplicação
- **Spring Web MVC** - API REST
- **PostgreSQL** - Banco de dados relacional
- **Flyway** - Migrations de banco de dados
- **Maven** - Gerenciamento de dependências

### Frontend
- **HTML5** - Estrutura das páginas
- **CSS3** - Estilização
- **JavaScript (Vanilla)** - Lógica de interface
- **Fetch API** - Comunicação com o backend

### Ferramentas
- **Git** - Controle de versão
- **PostgreSQL** - Banco de dados

---

## 📁 Estrutura do Projeto

```
ProjetoIntegrador/
├── backend/                          # Aplicação Spring Boot
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── br/com/ProjetoIntegrador/
│   │       │       ├── config/      # Configurações (Security, etc)
│   │       │       ├── controller/  # Controladores REST
│   │       │       │   ├── AuthController.java
│   │       │       │   ├── ObraController.java
│   │       │       │   └── TarefaController.java
│   │       │       ├── dto/         # Data Transfer Objects
│   │       │       ├── entity/      # Entidades JPA
│   │       │       │   ├── Usuario.java
│   │       │       │   ├── Obra.java
│   │       │       │   └── Tarefa.java
│   │       │       ├── repository/  # Repositórios JPA
│   │       │       │   ├── UsuarioRepository.java
│   │       │       │   ├── ObraRepository.java
│   │       │       │   └── TarefaRepository.java
│   │       │       ├── util/        # Utilitários
│   │       │       │   └── HashUtil.java
│   │       │       └── ProjetoIntegradorApplication.java
│   │       └── resources/
│   │           ├── application.properties  # Configurações da aplicação
│   │           └── db/
│   │               └── migration/
│   │                   ├── V1__Criacao_banco_dados.sql
│   │                   └── V2__Injecao_dados.sql
│   ├── pom.xml                        # Dependências Maven
│   └── mvnw, mvnw.cmd                 # Wrappers Maven
├── frontend/                         # Interface Web
│   ├── paginas/
│   │   ├── login.html
│   │   ├── dashboard.html
│   │   ├── obra.html
│   │   ├── tarefas.html
│   │   └── relatorios.html
│   ├── css/
│   │   ├── style.css
│   │   ├── login.css
│   │   ├── dashboard.css
│   │   ├── tarefas.css
│   │   └── relatorios.css
│   ├── js/
│   │   ├── api.js
│   │   ├── dashboard.js
│   │   ├── data.js
│   │   ├── tarefas.js
│   │   └── relatorios.js
│   └── assets/                       # Imagens e recursos estáticos
├── index.html                        # Página inicial
└── README.md                         # Este arquivo
```

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Java 17** ou superior ([Download](https://www.oracle.com/java/technologies/javase/jdk17-downloads.html))
- **Maven 3.6+** (ou use o wrapper incluído) ([Download](https://maven.apache.org/download.cgi))
- **PostgreSQL 15+** ([Download](https://www.postgresql.org/download/))
- **Git** ([Download](https://git-scm.com/downloads))
- Um editor de código (VS Code, IntelliJ IDEA, etc.)

---

## 🚀 Como Instalar

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/ProjetoIntegrador.git
cd ProjetoIntegrador
```

### 2. Configure o Banco de Dados PostgreSQL

#### Crie o banco de dados:

```sql
CREATE DATABASE gerenciamento_obras;
```

#### Ou usando psql:

```bash
psql -U postgres
CREATE DATABASE gerenciamento_obras;
\q
```

### 3. Configure as Variáveis de Ambiente

Crie ou edite o arquivo `backend/src/main/resources/application.properties`:

```properties
spring.application.name=ProjetoIntegrador

# Configurações do Banco de Dados
spring.datasource.url=jdbc:postgresql://localhost:5432/gerenciamento_obras
spring.datasource.username=postgres
spring.datasource.password=SUA_SENHA_AQUI

# Configurações JPA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

# Porta do servidor
server.port=5030
```

**⚠️ Importante:** Nunca commit senhas reais no repositório. Use variáveis de ambiente em produção.

### 4. Compile o Projeto Backend

```bash
cd backend
./mvnw clean install
```

Ou se tiver Maven instalado:

```bash
mvn clean install
```

### 5. Configure o Frontend

O frontend é estático e não requer instalação. Basta abrir os arquivos HTML no navegador ou usar um servidor local:

```bash
# Usando Python (se tiver instalado)
cd frontend
python -m http.server 5501

# Ou usando Node.js (se tiver instalado)
npx serve -p 5501
```

---

## ▶️ Como Executar

### Executando o Backend

```bash
cd backend
./mvnw spring-boot:run
```

Ou se tiver Maven instalado:

```bash
mvn spring-boot:run
```

O backend estará disponível em: `http://localhost:5030`

### Executando o Frontend

Abra o arquivo `index.html` diretamente no navegador ou use um servidor local na porta 5501.

A aplicação frontend estará disponível em: `http://localhost:5501` (se usar servidor local)

### Verificando a Instalação

1. Acesse `http://localhost:5030/obras` para verificar se o backend está funcionando
2. Acesse `http://localhost:5501` (ou abra index.html) para ver a interface
3. Tente fazer login com as credenciais de teste

---

## 🔐 Variáveis de Ambiente

| Variável | Descrição | Valor Padrão | Obrigatório |
|----------|-----------|--------------|-------------|
| `DB_PASSWORD` | Senha do PostgreSQL | - | Sim |
| `DB_URL` | URL de conexão com o banco | `jdbc:postgresql://localhost:5432/gerenciamento_obras` | Não |
| `DB_USERNAME` | Usuário do PostgreSQL | `postgres` | Não |
| `SERVER_PORT` | Porta do servidor | `5030` | Não |

### Exemplo de Configuração para Produção

```bash
export DB_PASSWORD=sua_senha_segura
export DB_URL=jdbc:postgresql://seu-host:5432/gerenciamento_obras
export DB_USERNAME=seu_usuario
```

---

## 🔌 API Endpoints

### Autenticação

#### Login
```http
POST /login
Content-Type: application/json

{
  "email": "usuario@exemplo.com",
  "senha": "senha123"
}
```

**Resposta:**
- `200 OK` - Login realizado com sucesso
- `404 Not Found` - Usuário não encontrado
- `401 Unauthorized` - Senha incorreta

---

### Obras

#### Listar Todas as Obras
```http
GET /obras
```

**Resposta:**
```json
[
  {
    "id": 1,
    "nome": "Residencial Flores",
    "endereco": "Rua das Flores, 123",
    "status": "em_andamento",
    "orcamento": 500000.00,
    "data_inicio": "2024-01-15",
    "data_prevista_fim": "2024-12-31"
  }
]
```

#### Buscar Obra por ID
```http
GET /obras/{id}
```

#### Criar Nova Obra
```http
POST /obras
Content-Type: application/json

{
  "nome": "Residencial Flores",
  "cliente": "João Silva",
  "endereco": "Rua das Flores, 123",
  "orcamento": 500000.00,
  "data_inicio": "2024-01-15",
  "data_prevista_fim": "2024-12-31",
  "status": "planejamento",
  "descricao": "Construção de residencial padrão alto",
  "responsavel_id": 1
}
```

#### Atualizar Obra
```http
PUT /obras/{id}
Content-Type: application/json

{
  "nome": "Residencial Flores (Atualizado)",
  "cliente": "João Silva",
  "endereco": "Rua das Flores, 123",
  "orcamento": 550000.00,
  "data_inicio": "2024-01-15",
  "data_prevista_fim": "2025-01-31",
  "status": "em_andamento",
  "descricao": "Construção de residencial padrão alto",
  "responsavel_id": 1
}
```

#### Deletar Obra
```http
DELETE /obras/{id}
```

---

### Tarefas

#### Listar Todas as Tarefas
```http
GET /tarefas
```

**Resposta:**
```json
[
  {
    "id": 1,
    "titulo": "Fundação",
    "descricao": "Escavação e preparação do terreno",
    "status": "concluida",
    "prioridade": "alta",
    "responsavel": "Engenheiro Carlos",
    "prazo": "2024-02-28",
    "obra_id": 1
  }
]
```

#### Criar Nova Tarefa
```http
POST /tarefas
Content-Type: application/json

{
  "titulo": "Alvenaria",
  "descricao": "Elevação das paredes",
  "status": "pendente",
  "prioridade": "media",
  "responsavel": "Mestre João",
  "prazo": "2024-04-30",
  "obra_id": 1
}
```

#### Atualizar Tarefa
```http
PUT /tarefas/{id}
Content-Type: application/json

{
  "titulo": "Alvenaria",
  "descricao": "Elevação das paredes - 1º andar",
  "status": "em_andamento",
  "prioridade": "alta",
  "responsavel": "Mestre João",
  "prazo": "2024-05-15",
  "obra_id": 1
}
```

#### Deletar Tarefa
```http
DELETE /tarefas/{id}
```

---

## 🗄️ Banco de Dados

### Estrutura do Banco

#### Tabela `usuarios`
Armazena os usuários do sistema com seus perfis de acesso.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| id | SERIAL | Chave primária |
| nome | VARCHAR(100) | Nome do usuário |
| email | VARCHAR(100) | Email único do usuário |
| senha | VARCHAR(64) | Hash da senha |
| cargo | cargo_usuario | Perfil (admin, engenheiro, mestre_de_obras, operário) |
| criado_em | TIMESTAMP | Data de criação |

#### Tabela `obras`
Armazena as informações das obras de construção.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| id | SERIAL | Chave primária |
| nome | VARCHAR(150) | Nome da obra |
| endereco | VARCHAR(255) | Endereço da obra |
| status | status_obra | Status (planejamento, em_andamento, pausada, concluida, cancelada) |
| descricao | TEXT | Descrição detalhada |
| orcamento | DECIMAL(15,2) | Orçamento da obra |
| data_inicio | DATE | Data de início |
| data_prevista_fim | DATE | Data prevista de conclusão |
| criado_em | TIMESTAMP | Data de criação |

#### Tabela `tarefas`
Armazena as tarefas vinculadas às obras.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| id | SERIAL | Chave primária |
| titulo | VARCHAR(150) | Título da tarefa |
| descricao | TEXT | Descrição da tarefa |
| status | status_tarefa | Status (pendente, em_andamento, concluida, cancelada) |
| prioridade | prioridade_tarefa | Prioridade (baixa, media, alta, urgente) |
| obra_id | INT | Chave estrangeira para obras |
| responsavel | VARCHAR(100) | Responsável pela tarefa |
| prazo | DATE | Prazo de conclusão |
| criado_em | TIMESTAMP | Data de criação |

### Tipos Enumerados

#### `cargo_usuario`
- admin
- engenheiro
- mestre_de_obras
- operario

#### `status_obra`
- planejamento
- em_andamento
- pausada
- concluida
- cancelada

#### `status_tarefa`
- pendente
- em_andamento
- concluida
- cancelada

#### `prioridade_tarefa`
- baixa
- media
- alta
- urgente

### Relacionamentos

- **Um usuário pode ser responsável por várias obras** (ManyToOne em obras)
- **Uma obra possui várias tarefas** (OneToMany em tarefas)
- **Uma tarefa está vinculada a uma obra** (ManyToOne em tarefas)

### Migrations

O projeto usa Flyway para gerenciar as migrations do banco de dados:

- `V1__Criacao_banco_dados.sql` - Criação das tabelas e tipos
- `V2__Injecao_dados.sql` - Inserção de dados iniciais

As migrations são executadas automaticamente ao iniciar a aplicação.

---

## 💡 Exemplos de Uso

### Exemplo 1: Criar uma Nova Obra

```bash
curl -X POST http://localhost:5030/obras \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Edifício Comercial Centro",
    "cliente": "Empresa ABC",
    "endereco": "Av. Principal, 1000",
    "orcamento": 1500000.00,
    "data_inicio": "2024-03-01",
    "data_prevista_fim": "2025-06-30",
    "status": "planejamento",
    "descricao": "Edifício comercial com 10 andares",
    "responsavel_id": 1
  }'
```

### Exemplo 2: Adicionar Tarefas a uma Obra

```bash
curl -X POST http://localhost:5030/tarefas \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Licenciamento",
    "descricao": "Obter todas as licenças necessárias",
    "status": "pendente",
    "prioridade": "alta",
    "responsavel": "Engenheiro Pedro",
    "prazo": "2024-03-15",
    "obra_id": 1
  }'
```

### Exemplo 3: Listar Obras via Frontend

Acesse o dashboard em `http://localhost:5501/paginas/dashboard.html` para visualizar todas as obras de forma interativa.

### Exemplo 4: Login no Sistema

```bash
curl -X POST http://localhost:5030/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@exemplo.com",
    "senha": "admin123"
  }'
```

---

## 🗺️ Roadmap

### Versão 1.0 (Atual)
- ✅ CRUD de Obras
- ✅ CRUD de Tarefas
- ✅ Autenticação de Usuários
- ✅ Dashboard básico
- ✅ Relatórios simples

### Versão 1.1 (Próximo)
- [ ] Autenticação com JWT
- [ ] Upload de fotos e documentos
- [ ] Notificações de prazos
- [ ] Histórico de alterações
- [ ] Filtros avançados

### Versão 2.0 (Futuro)
- [ ] Aplicação mobile (React Native)
- [ ] Integração com APIs externas (clima, materiais)
- [ ] Sistema de aprovações
- [ ] Gráficos avançados e analytics
- [ ] Multi-tenancy
- [ ] Exportação de relatórios em PDF/Excel

---

## 🤝 Como Contribuir

Contribuições são bem-vindas! Siga estas etapas:

1. **Fork o repositório**
2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/NovaFuncionalidade
   ```
3. **Faça suas alterações**
   - Siga o padrão de código existente
   - Adicione testes se necessário
   - Documente as mudanças
4. **Commit suas alterações**
   ```bash
   git commit -m "Adiciona nova funcionalidade X"
   ```
5. **Push para a branch**
   ```bash
   git push origin feature/NovaFuncionalidade
   ```
6. **Abra um Pull Request**

### Diretrizes de Contribuição

- Mantenha o código limpo e bem documentado
- Siga as convenções de código Java
- Teste suas alterações antes de submeter
- Seja respeitoso e construtivo nas revisões

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

```
MIT License

Copyright (c) 2024 Projeto Integrador

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👥 Autores

- **Felpsz Brucciamolino** - Desenvolvedor Full Stack e responsável pela arquitetura principal
- **annyvick** - Validação funcional do Readme e do Projeto de Conceito (PoC)
- **arienekarenne** - Desenvolvedora UX/UI
- **EmersonAiresIntegrador** - Desenvolvedor e responsável pela arquitetura do banco de dados
- **Haremitsu** - Elaboração e desenvolvimento do README e do Projeto de Conceito (PoC)
- **Tettmann** - Desenvolvedor Backend

---

## 📞 Contato

- **Repositório:** [https://github.com/seu-usuario/ProjetoIntegrador](https://github.com/seu-usuario/ProjetoIntegrador)
- **Issues:** [https://github.com/seu-usuario/ProjetoIntegrador/issues](https://github.com/seu-usuario/ProjetoIntegrador/issues)

---

## 🙏 Agradecimentos

- A toda a equipe do Projeto Integrador
- À comunidade open source
- Aos professores e orientadores do SENAC

---

<div align="center">

**Desenvolvido com ❤️ pela equipe do Projeto Integrador**

[⬆ Voltar ao topo](#sistema-de-gerenciamento-de-obras-da-construção-civil)

</div> 

{
  "email": "usuario@exemplo.com",
  "senha": "senha123"
}


**Resposta:**
- `200 OK` - Login realizado com sucesso
- `404 Not Found` - Usuário não encontrado
- `401 Unauthorized` - Senha incorreta

---

### Obras

#### Listar Todas as Obras
http
GET /obras


**Resposta:**
json
[
  {
    "id": 1,
    "nome": "Residencial Flores",
    "endereco": "Rua das Flores, 123",
    "status": "em_andamento",
    "orcamento": 500000.00,
    "data_inicio": "2024-01-15",
    "data_prevista_fim": "2024-12-31"
  }
]


#### Buscar Obra por ID
http
GET /obras/{id}


#### Criar Nova Obra
http
POST /obras
Content-Type: application/json

{
  "nome": "Residencial Flores",
  "cliente": "João Silva",
  "endereco": "Rua das Flores, 123",
  "orcamento": 500000.00,
  "data_inicio": "2024-01-15",
  "data_prevista_fim": "2024-12-31",
  "status": "planejamento",
  "descricao": "Construção de residencial padrão alto",
  "responsavel_id": 1
}


#### Atualizar Obra
http
PUT /obras/{id}
Content-Type: application/json

{
  "nome": "Residencial Flores (Atualizado)",
  "cliente": "João Silva",
  "endereco": "Rua das Flores, 123",
  "orcamento": 550000.00,
  "data_inicio": "2024-01-15",
  "data_prevista_fim": "2025-01-31",
  "status": "em_andamento",
  "descricao": "Construção de residencial padrão alto",
  "responsavel_id": 1
}


#### Deletar Obra
http
DELETE /obras/{id}


---

### Tarefas

#### Listar Todas as Tarefas
http
GET /tarefas


**Resposta:**
json
[
  {
    "id": 1,
    "titulo": "Fundação",
    "descricao": "Escavação e preparação do terreno",
    "status": "concluida",
    "prioridade": "alta",
    "responsavel": "Engenheiro Carlos",
    "prazo": "2024-02-28",
    "obra_id": 1
  }
]


#### Criar Nova Tarefa
http
POST /tarefas
Content-Type: application/json

{
  "titulo": "Alvenaria",
  "descricao": "Elevação das paredes",
  "status": "pendente",
  "prioridade": "media",
  "responsavel": "Mestre João",
  "prazo": "2024-04-30",
  "obra_id": 1
}


#### Atualizar Tarefa
http
PUT /tarefas/{id}
Content-Type: application/json

{
  "titulo": "Alvenaria",
  "descricao": "Elevação das paredes - 1º andar",
  "status": "em_andamento",
  "prioridade": "alta",
  "responsavel": "Mestre João",
  "prazo": "2024-05-15",
  "obra_id": 1
}


#### Deletar Tarefa
http
DELETE /tarefas/{id}
```

---

## 🗄️ Banco de Dados

### Estrutura do Banco

#### Tabela usuarios
Armazena os usuários do sistema com seus perfis de acesso.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| id | SERIAL | Chave primária |
| nome | VARCHAR(100) | Nome do usuário |
| email | VARCHAR(100) | Email único do usuário |
| senha | VARCHAR(64) | Hash da senha |
| cargo | cargo_usuario | Perfil (admin, engenheiro, mestre_de_obras, operário) |
| criado_em | TIMESTAMP | Data de criação |

#### Tabela obras
Armazena as informações das obras de construção.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| id | SERIAL | Chave primária |
| nome | VARCHAR(150) | Nome da obra |
| endereco | VARCHAR(255) | Endereço da obra |
| status | status_obra | Status (planejamento, em_andamento, pausada, concluida, cancelada) |
| descricao | TEXT | Descrição detalhada |
| orcamento | DECIMAL(15,2) | Orçamento da obra |
| data_inicio | DATE | Data de início |
| data_prevista_fim | DATE | Data prevista de conclusão |
| criado_em | TIMESTAMP | Data de criação |

#### Tabela tarefas
Armazena as tarefas vinculadas às obras.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| id | SERIAL | Chave primária |
| titulo | VARCHAR(150) | Título da tarefa |
| descricao | TEXT | Descrição da tarefa |
| status | status_tarefa | Status (pendente, em_andamento, concluida, cancelada) |
| prioridade | prioridade_tarefa | Prioridade (baixa, media, alta, urgente) |
| obra_id | INT | Chave estrangeira para obras |
| responsavel | VARCHAR(100) | Responsável pela tarefa |
| prazo | DATE | Prazo de conclusão |
| criado_em | TIMESTAMP | Data de criação |

### Tipos Enumerados

#### cargo_usuario
- admin
- engenheiro
- mestre_de_obras
- operario

#### status_obra
- planejamento
- em_andamento
- pausada
- concluida
- cancelada

#### status_tarefa
- pendente
- em_andamento
- concluida
- cancelada

#### prioridade_tarefa
- baixa
- media
- alta
- urgente

### Relacionamentos

- *Um usuário pode ser responsável por várias obras* (ManyToOne em obras)
- *Uma obra possui várias tarefas* (OneToMany em tarefas)
- *Uma tarefa está vinculada a uma obra* (ManyToOne em tarefas)

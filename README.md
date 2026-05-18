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

O *Sistema de Gerenciamento de Obras da Construção Civil* é uma aplicação full-stack desenvolvida para facilitar o controle e administração de projetos de construção. O sistema permite o cadastro de obras, gestão de tarefas, controle de usuários e geração de relatórios, proporcionando uma visão completa do progresso de cada projeto.

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

## 🛠️ Tecnologias

### Backend
- *Java 17* - Linguagem de programação
- *Spring Boot 4.0.6* - Framework principal
- *Spring Data JPA* - Persistência de dados
- *Spring Security* - Segurança da aplicação
- *Spring Web MVC* - API REST
- *PostgreSQL* - Banco de dados relacional
- *Flyway* - Migrations de banco de dados
- *Maven* - Gerenciamento de dependências

### Frontend
- *HTML5* - Estrutura das páginas
- *CSS3* - Estilização
- *JavaScript (Vanilla)* - Lógica de interface
- *Fetch API* - Comunicação com o backend

### Ferramentas
- *Git* - Controle de versão
- *PostgreSQL* - Banco de dados

---

## 📁 Estrutura do Projeto


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


---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

* *Java 17* ou superior ([Download](https://www.oracle.com/java/technologies/javase/jdk17-downloads.html))
* *Maven 3.6+* (ou use o wrapper incluído) ([Download](https://maven.apache.org/download.cgi))
* *PostgreSQL 15+* ([Download](https://www.postgresql.org/download/))
* *Git* ([Download](https://git-scm.com/downloads))
* Um editor de código (VS Code, IntelliJ IDEA, etc.)

---

## 🚀 Como Instalar

### 1. Clone o Repositório

bash
git clone https://github.com/seu-usuario/ProjetoIntegrador.git
cd ProjetoIntegrador


### 2. Configure o Banco de Dados PostgreSQL

#### Crie o banco de dados:

sql
CREATE DATABASE gerenciamento_obras;


#### Ou usando psql:

bash
psql -U postgres
CREATE DATABASE gerenciamento_obras;
\q


### 3. Configure as Variáveis de Ambiente

Crie ou edite o arquivo backend/src/main/resources/application.properties:

properties
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


*⚠️ Importante:* Nunca commit senhas reais no repositório. Use variáveis de ambiente em produção.

### 4. Compile o Projeto Backend

bash
cd backend
./mvnw clean install


Ou se tiver Maven instalado:

bash
mvn clean install


### 5. Configure o Frontend

O frontend é estático e não requer instalação. Basta abrir os arquivos HTML no navegador ou usar um servidor local:

bash
# Usando Python (se tiver instalado)
cd frontend
python -m http.server 5501

# Ou usando Node.js (se tiver instalado)
npx serve -p 5501


---

## ▶️ Como Executar

### Executando o Backend

bash
cd backend
./mvnw spring-boot:run


Ou se tiver Maven instalado:

bash
mvn spring-boot:run


O backend estará disponível em: http://localhost:5030

### Executando o Frontend

Abra o arquivo index.html diretamente no navegador ou use um servidor local na porta 5501.

A aplicação frontend estará disponível em: http://localhost:5501 (se usar servidor local)

### Verificando a Instalação

1. Acesse http://localhost:5030/obras para verificar se o backend está funcionando
2. Acesse http://localhost:5501 (ou abra index.html) para ver a interface
3. Tente fazer login com as credenciais de teste

---

## 🔐 Variáveis de Ambiente

| Variável | Descrição | Valor Padrão | Obrigatório |
|----------|-----------|--------------|-------------|
| DB_PASSWORD | Senha do PostgreSQL | - | Sim |
| DB_URL | URL de conexão com o banco | jdbc:postgresql://localhost:5432/gerenciamento_obras | Não |
| DB_USERNAME | Usuário do PostgreSQL | postgres | Não |
| SERVER_PORT | Porta do servidor | 5030 | Não |

### Exemplo de Configuração para Produção

bash
export DB_PASSWORD=sua_senha_segura
export DB_URL=jdbc:postgresql://seu-host:5432/gerenciamento_obras
export DB_USERNAME=seu_usuario


---

## 🔌 API Endpoints

### Autenticação

#### Login
```http
POST /login
Content-Type: application/json
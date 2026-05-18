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

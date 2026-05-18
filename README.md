Banco de Dados

O banco de dados do sistema de gerenciamento de obras da construção civil foi desenvolvido em PostgreSQL (Supabase) e é integrado ao backend em Python (FastAPI) hospedado na Vercel. 

 

Estrutura do Banco de Dados: 

- usuarios: armazena dados dos usuários do sistema 

- obras: cadastro das obras 

- tarefas: controle das atividades das obras 

 

Relacionamentos: 

- Um usuário pode ser responsável por várias obras 

- Uma obra possui várias tarefas 

- Uma tarefa está vinculada a uma obra e a um usuário 

 

Conexão com o Banco: 

DATABASE_URL=postgresql://usuario:senha@host:porta/banco 

Importante: Não expor a connection string em código ou repositório público. 

 

Como utilizar: 

1. Criar projeto no Supabase 

2. Executar o script SQL 

3. Configurar variável de ambiente DATABASE_URL 

4. Integrar com o backend via API 

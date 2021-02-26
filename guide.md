# Guide

# Intro
  Este documento vou estar usando para anotar passos de instalação de dependencias e observações
  
# Structure

  Identifiquei no prohjeto alguns Design Architecture como MVC(Model-View-Control), Repository Pattern e Services Patterns 
```bash
  |__ src -> pasta principal da aplicação
     |__ controllers -> localizada a regra de negocio de uma aplicação, chamada pela rota
     |__ database -> contém todo conteúdo referente ao banco de dados
        __ index.ts -> arquivo cria a conexão com o banco de dados
        |__ migration -> criação/manutenção das tabelas
     |__ models -> contém o modelo das classes que serão usadas pela aplicação e pelo banco de dados
     |__ respositories -> classes responsaveis pelo acesso ao banco de dados(criação de novos registros, alteração, pesquisa ...)
     |__ routers -> todas as rotas da aplicação são encontradas dentro deste diretorio
     |__ services -> contém arquivos que são responsaveis por alguns serviço(que nesta aplicação está responsável por crirar o cadastro de email e envio de email do mesmo, tirando assim a reponsábilidade do controller)
     |__ views -> contém o html e css da mensagem que será enviada para pesquisa de satisfação
```

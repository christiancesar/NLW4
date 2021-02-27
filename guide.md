# Guide

# Intro
  Este documento vou estar usando para anotar passos de instalação de dependencias e observações

# Command runner 
  Seguintes libs foram necessárias para construir está api:
  `yarn init`
  `git init`
  `yarn add express` -> lib resposável pela criação da api(métodos no caso)
  `yarn add uuid` -> lib contém metodos para criar (universally unique identifier)
  `yarn add @types/uuid`
  `yarn add @types/express` -> add tipificação da lib express para typeScript
  `yarn add typescript -D` -> trabalhar com typeScript
  `yarn add ts-node-dev -D` -> facilita a subir servidor  
  `yarn add typeorm` -> resposanvel por mapear as classes para relacionamentos das tabelas
  `yarn add reflect-metadata` -> pelo que pude entender é resposanvel por interpretar os decorators do typeORM
  `yarn add sqlite3` -> instala drive do sqlite

  ## <img src="https://jestjs.io/img/favicon/favicon.ico" width=24 height= 24> Tests with Jest 
  > Olhar dentro do arquivo jest.config.ts as configurações que la foram ativadas a mais.
  
  `yarn add jest @types/jest -D`
  `yarn jest --init` 
   ``` bash
    The following questions will help Jest to create a suitable configuration for your project

    √ Would you like to use Jest when running "test" script in "package.json"? ... yes
    √ Would you like to use Typescript for the configuration file? ... yes
    √ Choose the test environment that will be used for testing » node
    √ Do you want Jest to add coverage reports? ... no
    √ Which provider should be used to instrument code for coverage? » v8
    √ Automatically clear mock calls and instances between every test? ... yes
   ```
  `yarn add ts-jest -D` -> trabalha com typescript nos testes
  
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
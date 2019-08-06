# DesafioCrud

Este projeto criado para atender ao requisitos de desafio de construção de um CRUD para cadastro de clientes consumindo a API https://deividfortuna.github.io/fipe/.

Para o desafio foram utilizados o framework Angular versão 8, utilizando seu utilitário de linha de comando para criar o projeto inicial [Angular CLI](https://github.com/angular/angular-cli).
Também foi utilizado o framework [Bootstrap](https://getbootstrap.com/) na versão 4.3, juntamente com JQuery (requerido pelo Bootstrap) para estilização e componentes. Para ícones foi utilizado a biblioteca do Google [Icons - Material Design](https://material.io/resources/icons/?style=baseline)

## Configuração
O projeto manteve a maior parte das configurações padrões criadas pelo assistente de criação Angular CLI, tendo pequenas modificações como: `"prefix": "dc"` no arquivo __angular.json__ para redefinir a nomeclatura padrão dos selectors dos componentes criados (dc - desafio crud).

Também foram alteradas algumas regras de lint para Typescript, de forma a se adequar ao projeto.

## Estrutura
```
root/
├── dist/
├─┬ e2e/
│ └── src/
├── node_modules/
└─┬ src/
  ├─┬ app/
  │ ├── components/
  │ │ ├── alerta/
  │ │ ├── app/
  │ │ ├── confirmacaoModal/
  │ │ ├── edita/
  │ │ └── lista/
  │ ├── directives/
  │ ├── models/
  │ ├── modules/
  │ ├── services/
  │ └── utils/
  ├── assets/
  └── environments/
```

`root`: diretório raiz do projeto contendo arquivos de configuração como __angular.json, tsconfig.json, .editorconfig, tslint.json, .gitignore, karma.conf.js, package.json__ <br>
`dist`: arquivos compilados e minificados do build do projeto <br>
`e2e`: arquivos de testes end-to-end <br>
`node_modules`: arquivos de instalação das dependências utilizados no projeto <br>
`src`: diretório raíz dos arquivos a serem "compilados" para construção do projeto <br>
`app`: diretório para divisão dos arquivos de inicialização com os módulos do projeto <br>
`components`: diretório onde são armazendos os componentes reutilizáveis do projeto. Componentes: __alerta, app, confirmacaoModal, edita, lista__ <br>
`directives`: arquivos de directivas utilizados para validações de formulários, tais como validações de CPF e data. <br>
`models`: arquivos de classes que representão modelos (__Cliente, Marca, Modelo__) <br>
`modules`: arquivos para definirem módulos do angular <br>
`services`: arquivos de classe responsável por fornecerem serviços do projeto, tais como __Cadastro de Clientes__ e __Consulta de veículos__ <br>
`utils`: arquivos de funções gerais e genéricas (utilitários) para reaproveitamento de código, tais como __mascara de CPF__ e __datas__ <br>
`assets`: diretório para armazenamento de arquivos estaticos e públicos para página web, tais como Imagens, fontes, etcs <br>
`environments`: arquivos de definição e configuração dos ambientes de desenvolvimento e produção.

## Executando o projeto

O projeto pode ser executado diretamente pelo [link](https://wac0013.github.io/desafio-crud/), estando disponível para testes. 

### Após realizar o clone do repositório, executar o seguinte comando para instalação das dependências.
```sh
$ npm install
```
ou
```sh
$ yarn install
```

### Construindo o projeto
```sh
$ npm run build
```

### Realizar o deploy
```sh
$ npm run deploy
```

### Realizar o lint do font
```sh
$ npm run lint
```

### Inidiar servidor para modo desenvolvimento
```sh
$ npm run start
```

### Executar testes unitários
```sh
$ npm run test
```

### Executar testes end-to-end
```sh
$ npm run e2e
```

## Sobre o desafio

Tela de CRUD, com listagem, visualização, edição, deleção e cadastro de clientes, poindo validações para cadastro, além de realizar consulta a API pública da tabela fipe para uso de dados de veículos. Utilizando o armazenamento do browser (localStorage) para armazenamento e manipulação dos dados.  

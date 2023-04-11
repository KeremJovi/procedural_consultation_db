# 
<h1 align="center">Procedural Consultation DB</h1>

<p align="center">Este projeto é uma API desenvolvida utilizando NodeJS e TypeScript com banco de dados MongoDB. Ele possui endpoints para criar, 
listar e mostrar detalhes de processos, e precisa ser iniciado com a inserção de dados no banco. </p>

<h2 align="center">Instalação</h2>

<p>Para rodar o projeto, você precisa ter o Node.js e o MongoDB instalados na sua máquina. Em seguida, você pode seguir os seguintes passos: </p>

1. Clone o repositório:

```bash
$ git clone https://github.com/KeremJovi/procedural_consultation_db.git
```

2. Instale as dependências:

```bash
$ npm install
```

<h2>Configuração</h2>

<p>Antes de rodar o projeto, é necessário configurar as variáveis de ambiente. O arquivo .env contém as seguintes variáveis:</p>

```bash
$ PORT=3030
$ MONGODB=valor_do_MONGODB
$ MONGODB_TEST=valor_do_MONGODB_TEST
```

- PORT: porta em que o servidor será iniciado;
- MONGODB: URL de conexão com o banco de dados de produção;
- MONGODB_TEST: URL de conexão com o banco de dados de teste.


<h2>Uso</h2

<p>Para iniciar o servidor, execute o seguinte comando:</p>

```bash
$ yarn run dev
```

<p>Para rodar os testes, execute o seguinte comando:</p>

```bash
$ yarn test
```

<p>Para popular o banco de dados, utilize o endpoint POST </p> 

```bash
/populating_bank
```

<p>Para buscar processos, utilize os endpoints GET </p> 

 - Para uma busca personalizada 
 
 ```bash
 /find
```

- Para uma busca determinada. 

 ```bash
/details/:idProcess
```

<h2>Tecnologias utilizadas</h2>

NodeJS
TypeScript
MongoDB
Mongoose
Nodemon
Eslint
Prettier
Jest
Express
Sucrase


<h2>Possíveis melhorias</h2>

- Inclusão de autenticação e autorização;
- Validação de dados de entrada;
- Paginação de resultados;
- Endpoint para edição de processos;
- Endpoint para exclusão de processos.

#  TI AutoCom

## API (NODEJS)

<p align="center">
  <img alt="License" src="https://github.com/adreider/NLW-6-NODEJS/blob/main/.github/preview.png?raw=true">
</p>

### Regras

- Cadastro de usuário

  [ ] Não é permitido cadastrar mais um usuário com o mesmo e-mail

  [ ] Não é permitido cadastrar usuário sem e-mail

...

## INIT PROJECT

- [x] Iniciar projeto com typescript e instalar packs express,
typescript, ts-node-dev e @types/express.
- [x] criar servidor na porta 3000 usando express.listen()

        TIPOS DE ROTAS

 * GET    => Buscar informações
 * POST   => Inserir (Criar) informações
 * PUT    => Alterar informações
 * DELETE => Deletar (Dados) informações
 * PATCH  => Alterar informações específicas
  
- [x] criar primeira rota GET 
- [x] criar primeira rota POST

        TIPOS DE PARÂMETROS

 * Routes Params => http://localhost:3000/products/719864528645
 * Query Params  => http://localhost:3000/products?name=teclado&description=razer
 * Body Params   => {
 *  "name": "teclado"
 *  "description": "razer"
 * }

        ORMs e FRAMEWORKS

- TypeORM
- sequelize
- Prisma
- Knex
- adonis
  
       INSTALANDO ORM --> *TypeORM*

--> COMANDOS
- [x] yarn add typeorm reflect-metadata sqlite3


        CRIANDO CONEXÃO COM BANCO DE DADOS

- [x] criar arquivo ormconfig.json
- [x] configurar aquivo ormconfig.json
- [x] criar repositório para o arquivo de banco de dados
- [x] criar e configurar arquivo de migration
- [x] criar entidade users
"(comando) --> yarn typeorm migration:create -n createUsers"

  Exemplo Table *Users*

name: "users",
 columns: [
{
  name: "id",
  type: "uuid",
  isPrimary: true,
},
{
  name: "name",
  type: "varchar",
},
{
  name: "email",
  type: "varchar",
},
{
  name: "admin",
  type: "boolean",
  default: false
},
{
  name: "created_at",
  type: "timestamp",
  default: "now()"
},
{
  name: "updated_at",
  type: "timestamp",
  default: "now()"
}

    CRIANDO ENTIDADES

--> COMANDOS
- [x] yarn add typeorm entity:create -n User
- [x] criar constructor e adicionar uuid a entidade user

    CRIAR REPOSITÓRIO

Observação ==> (entidade) <-> repositorio/orm <-> (banco de dados)
- [x] criar e configurar repositório user
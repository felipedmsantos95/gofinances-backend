# GoFinances Backend

<p align="center">
    <a href="readme_en.md">English</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="readme.md">Português</a>&nbsp;&nbsp;&nbsp;
</p>

## About

Backend of the Gofinances application in Node.js for managing transactions by sending files by form. The frontend repository is available [here](https://github.com/felipedmsantos95/gofinances-frontend). This is the sixth challenge proposed in the [Rocketseat](https://github.com/Rocketseat) GoStack bootcamp.

## Technologies used

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/) database
- [TypeORM](https://typeorm.io/#/) Object-Relational Mapping

## Requirements

To execute the project it is necessary to have the following requirements installed on the system:

- [Node.js](https://nodejs.org/en/) 12.x or later
- [Yarn](https://yarnpkg.com/) 1.21 or later
- [PostgreSQL](https://www.postgresql.org/) database 11.x or later

## Running the project

### Cloning the project

```bash
$ git clone https://github.com/felipedmsantos95/gofinances-backend
$ cd gofinances-backend
```

### Scripts for project execution

Within the project directory for the first time, you must make sure that the PostgreSQL service is running and create a database called `gostack_desafio06`. In the `./ormconfig.json` file it is possible to change the PostgreSQL port, user and password settings according to their context.

```json
{
  "type": "postgres",
  "host": "address_of_your_host",
  "port": number_of_postgres_port,
  "username": "your_postgres_user",
  "password": "your_password",
  "database": "gostack_desafio06",
  "entities": ["./src/models/*.ts"],
  "migrations": ["./src/database/migrations/*.ts"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
```

With the settings made correctly, you can use the `yarn` command to install the dependencies, so the following scripts can be executed:

#### `yarn typeorm migration:run`

Configure the relationships created in TypeORM in PostgreSQL. <br />
You can view any errors on the console.

#### `yarn dev:server`

Runs the backend in development mode.<br />
You can view any errors on the console.

#### `yarn test`

Run the test scripts performed. <br />
PS: For this command it is necessary to have created the `gostack_desafio06_tests` database. You can view any errors on the console.


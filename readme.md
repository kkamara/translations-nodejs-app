# translations-nodejs-app

(2021) A NodeJS boilerplate with ReactJS 16 Redux SPA.

* [Important Note](#important-note)

* [Installation](#installation)

* [Usage](#usage)

* [Using Docker?](#using-docker)

* [To run API tests](#to-run-api-tests)

* [Contributing](#contributing)

* [License](#license)

## Important Note

You should remove `config.json` from version-control because all database credentials are stored there.

For database usage in pipelines, I recommend creating a `testing_config.json` and adding database commands to `package.json`, like `migrate:test` and `seed:all:test`.

## Installation

* [NodeJS](https://nodejs.org/en/).

```bash
# Create our environment file.
cp .env.example .env
# Update values in .env file like port, timezone, and app name.
# Install our app dependencies.
npm install --global yarn
yarn install
# Before running the next command:
# Update your database details in config.json
yarn migrate
yarn seed:all
```

#### Frontend Installation

```bash
cd frontend
yarn install
yarn build
```

#### Sequelize tutorial

See [package.json](https://github.com/kkamara/nodejs-reactjs-boilerplate/blob/main/package.json) for helpful commands related to using the database.

```bash
# Docs:
#   https://sequelize.org/docs/v6/other-topics/migrations/
# Running a specific database seeder
NODE_ENV=development npx sequelize-cli db:seed --seed 20230814135938-demo-user.js
# Creating a model & migration
NODE_ENV=development npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
# Creating a migration
NODE_ENV=development npx sequelize-cli migration:generate --name migration-skeleton
# Running migrations
NODE_ENV=development npx sequelize-cli db:migrate
# Revert the most recent migration
NODE_ENV=development npx sequelize-cli db:migrate:undo
# Revert to a specific migration
NODE_ENV=development npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
# Creating a seed (fake database data) to simulate production environment
NODE_ENV=development npx sequelize-cli seed:generate --name demo-user
# Running seeds
NODE_ENV=development npx sequelize-cli db:seed:all
# Undo the latest seed
NODE_ENV=development npx sequelize-cli db:seed:undo
# Undo all seeds
NODE_ENV=development npx sequelize-cli db:seed:undo:all
```

## Usage

```bash
yarn start # Runs Start-script `yarn node src/app.js`
# Serves app to http://localhost:3000.
# Serves API to http://localhost:3000/api/v1.
#   Example API route: http://localhost:3000/api/health.
```

#### Reload server on project files change

```bash
yarn dev
```

<a name="using-docker"></a>
## Using docker?

* [Docker](https://docs.docker.com/engine/install/) 
* [Docker Compose](https://docs.docker.com/compose/install/).

```bash
docker-compose up --build -d
```

## To run api tests

```bash
yarn test
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)

# NodeJS+Express Reference Architecture
This needs severe updating.

NodeJS+Express Reference Architecture

You'll need your own .env file populated with variables. See .env.example for an example.
Run 'npm run start:watch'
The command I've been using to start the db is 
  for macos: mongod --dbpath /Users/kyle.banner/data/db
  for windows: mongod --dbpath C:\data\db

eb init
eb create

npm run build
npm run dist
npm start (locally)
eb deploy

This repository uses TypeORM. The ormconfig file contains secrets, it has been marked ignored in .gitignore. You'll need to get this ormconfig.json file from a team member. Any time an entity is updated a new migration must be created/updated. More on migrations here: https://typeorm.io/#/migrations.

Instead of using typeorm cli directly (e.g. typeorm migration:run) use ts-node ./node_modules/typeorm/cli.js migration:run instead. e.g. to generate a migration use ts-node ./node_modules/typeorm/cli.js migration:generate -n NameOfMigration.
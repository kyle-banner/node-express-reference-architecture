# NodeJS+Express Reference Architecture
NodeJS+Express Reference Architecture

## Getting started
- Get the ormconfig.json file from a team member.
- Get added to the AWS security group.
- You'll need your own .env file populated with variables. See .env.example for an example.
- Run 'npm install'
- Run 'npm run start:watch'

## TypeORM and CRUD-ing the database
This repository uses TypeORM. The ormconfig file contains secrets, it has been marked ignored in .gitignore. You'll need to get this ormconfig.json file from a team member. Any time an entity is updated a new migration must be created/updated. More on migrations here: https://typeorm.io/#/migrations.

Instead of using typeorm cli directly (e.g. typeorm migration:run) use `ts-node ./node_modules/typeorm/cli.js migration:run instead`. For example to generate a migration use `ts-node ./node_modules/typeorm/cli.js migration:generate -n NameOfMigration`.

## Deployment
Steps (not currently necessary)
- eb init
- eb create
- npm run build
- npm run dist
- npm start (locally)
- eb deploy

## TODOs
Two items to fix:
 - When PUT-ing a meeting that already exists the address is null (not cascaded and saved on update)
 - Make hostEmployeeId and joiningEmployeeId in Meeting Entity the actual Employee Entity and not just a string

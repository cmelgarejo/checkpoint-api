# Checkpoint API application

This API server comes pre-configured with (based on AdonisJS boilerplate):

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the NPM command to install all dependencies

```bash
npm i
```

or manually clone the repo and then run `npm install`.

### Migrations

Run the following command to run startup migrations.

```bash
./scripts/migration.sh
```

Optionally run migrations with database seed adding `seed` as parameter to the migration script

```bash
./scripts/migration.sh seed
```
'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SetupDbSchema extends Schema {
  async up () {
    await this.db.raw('CREATE EXTENSION IF NOT EXISTS "pgcrypto" schema public')
    await this.db.raw(
      'CREATE EXTENSION IF NOT EXISTS "uuid-ossp" schema public'
    )
  }

  async down () {
    await this.db.raw('DROP EXTENSION IF EXISTS "public.pgcrypto"')
    await this.db.raw('DROP EXTENSION IF EXISTS "public.uuid-ossp"')
  }
}

module.exports = SetupDbSchema

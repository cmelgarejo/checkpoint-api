'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'roles'

class RolesTableSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table.increments()
      table
        .string('slug')
        .notNullable()
        .unique()
      table
        .string('name')
        .notNullable()
        .unique()
      table.text('description').nullable()
      table.timestamps(true, true)
    })
  }

  async down () {
    await this.db.raw(`DROP TABLE IF EXISTS ${tableName} CASCADE;`)
  }
}

module.exports = RolesTableSchema

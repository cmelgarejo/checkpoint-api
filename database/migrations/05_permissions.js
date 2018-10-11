'use strict'

const Schema = use('Schema')
const tableName = 'permissions'

class PermissionsTableSchema extends Schema {
  up() {
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
      table.timestamps()
    })
  }

  async down() {
    await this.db.raw(`DROP TABLE IF EXISTS ${tableName} CASCADE;`)
  }
}

module.exports = PermissionsTableSchema

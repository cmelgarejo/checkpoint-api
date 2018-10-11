'use strict'

const Schema = use('Schema')
const tableName = 'role_user'

class RoleUserTableSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table.increments()
      table
        .integer('role_id')
        .references('id')
        .inTable('roles')
        .onDelete('cascade')
      table
        .uuid('user_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade')
      table.timestamps()
    })
  }

  async down() {
    await this.db.raw(`DROP TABLE IF EXISTS ${tableName} CASCADE;`)
  }
}

module.exports = RoleUserTableSchema

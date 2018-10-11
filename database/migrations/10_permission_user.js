'use strict'

const Schema = use('Schema')
const tableName = 'permission_user'

class PermissionUserTableSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table.increments()
      table
        .integer('permission_id')
        .references('id')
        .inTable('permissions')
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

module.exports = PermissionUserTableSchema

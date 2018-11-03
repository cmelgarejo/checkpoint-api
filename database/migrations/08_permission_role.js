'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'permission_role'

class PermissionRoleTableSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table.increments()
      table
        .integer('permission_id')
        .references('id')
        .inTable('permissions')
        .onDelete('cascade')
      table
        .integer('role_id')
        .references('id')
        .inTable('roles')
        .onDelete('cascade')
      table.timestamps()
    })
  }

  async down() {
    await this.db.raw(`DROP TABLE IF EXISTS ${tableName} CASCADE;`)
  }
}

module.exports = PermissionRoleTableSchema

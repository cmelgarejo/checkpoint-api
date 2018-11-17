'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
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
      // BUG: Has to specify (true, true) to timestamps maybe a bug in adonis-acl?
      table.timestamps(true, true)
    })
  }

  async down() {
    await this.db.raw(`DROP TABLE IF EXISTS ${tableName} CASCADE;`)
  }
}

module.exports = RoleUserTableSchema

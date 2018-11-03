'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'forms'
const userTableName = 'users'

class FormSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table.increments()
      table
        .uuid('user_id')
        .references('id')
        .inTable(userTableName)
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = FormSchema

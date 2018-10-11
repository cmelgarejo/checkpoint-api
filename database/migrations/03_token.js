'use strict'

const Schema = use('Schema')
const tableName = 'tokens'
const usersTablename = 'users'

class TokensSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table.increments()
      table
        .uuid('user_id')
        .references('id')
        .inTable(usersTablename)
      table
        .string('token', 255)
        .notNullable()
        .unique()
        .index()
      table.string('type', 80).notNullable()
      table.boolean('is_revoked').defaultTo(false)
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = TokensSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'token_metrics'
const tokensTablename = 'tokens'

class TokensSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table.increments()
      table
        .integer('token_id')
        .references('id')
        .inTable(tokensTablename)
      table.text('ref')
      table.jsonb('metadata')
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = TokensSchema

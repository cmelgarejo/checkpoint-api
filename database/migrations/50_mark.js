'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'marks'
class MarkSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table.increments()
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = MarkSchema

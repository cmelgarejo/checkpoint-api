'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MarkSchema extends Schema {
  up () {
    this.create('marks', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('marks')
  }
}

module.exports = MarkSchema

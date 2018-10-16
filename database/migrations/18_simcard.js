'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SimcardSchema extends Schema {
  up () {
    this.create('simcards', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('simcards')
  }
}

module.exports = SimcardSchema

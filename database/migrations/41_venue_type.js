'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VenueTypeSchema extends Schema {
  up () {
    this.create('venue_types', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('venue_types')
  }
}

module.exports = VenueTypeSchema

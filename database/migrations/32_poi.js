'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PoiSchema extends Schema {
  up () {
    this.create('pois', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('pois')
  }
}

module.exports = PoiSchema

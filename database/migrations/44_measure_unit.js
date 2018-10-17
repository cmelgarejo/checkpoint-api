'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MeasureUnitSchema extends Schema {
  up () {
    this.create('measure_units', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('measure_units')
  }
}

module.exports = MeasureUnitSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'measure_units'

class MeasureUnitSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table.increments()
      table.text('name').notNullable()
      table.text('description')
      table.text('notes')
      table.jsonb('metadata')
      table.timestamps(true, true)
    })
  }

  down () {
    this.drop(tableName)
  }
}

module.exports = MeasureUnitSchema

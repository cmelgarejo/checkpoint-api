'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'mark_activity_items'
const markActivityTableName = 'mark_activities'
const measureUnitTableName = 'measure_units'
const itemTableName = 'items'

class MarkActivityItemSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table.increments()
      table
        .integer('mark_activity_id')
        .references('id')
        .inTable(markActivityTableName)
      table
        .integer('measure_unit_id')
        .references('id')
        .inTable(measureUnitTableName)
      table
        .integer('item_id')
        .references('id')
        .inTable(itemTableName)
      table.text('notes')
      table.decimal('qty')
      table.timestamps(true, true)
    })
  }

  down () {
    this.drop(tableName)
  }
}

module.exports = MarkActivityItemSchema

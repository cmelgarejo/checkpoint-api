'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'mark_activity_items'
const markActivityTableName = 'mark_activities'
const measureUnitTableName = 'measure_units'

class MarkActivityItemSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table.increments()
      table
        .uuid('mark_activity_id')
        .references('id')
        .inTable(markActivityTableName)
      table
        .uuid('measure_unit_id')
        .references('id')
        .inTable(measureUnitTableName)
      table
        .uuid('item_id')
        .references('id')
        .inTable(itemTableName)
      table.text('notes')
      table.float('qty')
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = MarkActivityItemSchema

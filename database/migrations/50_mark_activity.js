'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'mark_activities'
const markTableName = 'marks'
const activityTableName = 'activities'

class MarkActivitySchema extends Schema {
  up () {
    this.create(tableName, table => {
      table.increments()
      table
        .uuid('mark_id')
        .references('id')
        .inTable(markTableName)
      table
        .integer('activity_id')
        .references('id')
        .inTable(activityTableName)
      table.text('notes')
      table.boolean('private')
      table.boolean('pending')
      table.jsonb('images')
      table
        .jsonb('items')
        .comment('Schema: { id: uuid(), itemId: 0, measureUnitId: 0, qty: 0 }')
      table
        .timestamp('event_at')
        .comment('Optional: when the event should take place')
      table.timestamp('executed_at')
      table.timestamp('finished_at')
      table.timestamps()
    })
  }

  down () {
    this.drop(tableName)
  }
}

module.exports = MarkActivitySchema

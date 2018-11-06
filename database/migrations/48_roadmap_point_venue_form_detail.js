'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'roadmap_point_venue_form_details'
const itemTableName = 'items'
const activityTableName = 'activities'
const rpvfTableName = 'roadmap_point_venue_forms'

class RoadmapPointVenueFormDetailSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table.increments()
      table
        .uuid('rpvf_id')
        .references('id')
        .inTable(rpvfTableName)
      table
        .integer('activity_id')
        .references('id')
        .inTable(activityTableName)
      table
        .integer('item_id')
        .references('id')
        .inTable(itemTableName)
      table.float('qty')
      table.text('notes')
      table.jsonb('metadata')
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = RoadmapPointVenueFormDetailSchema

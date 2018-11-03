'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'roadmap_point_venue_form_details'

class RoadmapPointVenueFormDetailSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table.increments()
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = RoadmapPointVenueFormDetailSchema

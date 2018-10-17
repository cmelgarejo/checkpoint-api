'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoadmapPointVenueFormDetailSchema extends Schema {
  up () {
    this.create('roadmap_point_venue_form_details', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('roadmap_point_venue_form_details')
  }
}

module.exports = RoadmapPointVenueFormDetailSchema

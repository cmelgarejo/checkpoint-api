'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoadmapPointVenueFormSchema extends Schema {
  up () {
    this.create('roadmap_point_venue_forms', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('roadmap_point_venue_forms')
  }
}

module.exports = RoadmapPointVenueFormSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'roadmap_point_venue_forms'
const userTableName = 'users'
const venueTableName = 'venues'
const formTableName = 'forms'
const roadmapPointTableName = 'roadmap_points'

class RoadmapPointVenueFormSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table
        .uuid('id')
        .unique()
        .defaultTo(this.db.raw('public.gen_random_uuid()'))
      table
        .uuid('user_id')
        .references('id')
        .inTable(userTableName)
      table
        .uuid('venue_id')
        .references('id')
        .inTable(venueTableName)
      table
        .uuid('roadmap_point_id')
        .references('id')
        .inTable(roadmapPointTableName)
      table
        .uuid('form_id')
        .references('id')
        .inTable(formTableName)
      table.jsonb('metadata')
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = RoadmapPointVenueFormSchema

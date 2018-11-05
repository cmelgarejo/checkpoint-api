'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'roadmap_points'
const roadmapTableName = 'roadmaps'

class RoadmapPointSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table.increments()
      table
        .uuid('roadmap_id')
        .references('id')
        .inTable(roadmapTableName)
      table.text('name')
      table.text('description')
      table.text('notes')
      table
        .integer('radius')
        .defaultTo(50)
        .comment('The detection radius of the point')
      table.float('lat')
      table.float('lon')
      table
        .integer('point_order')
        .defaultTo(0)
        .comment('The order on the roadmap')
      table
        .time('mean_arrival_time')
        .comment('Approximate arrival time to the point')
      table
        .time('mean_leave_time')
        .comment('Approximate leave time from the point')
      table.jsonb('metadata')
      table.boolean('active').defaultTo(true)
      table.timestamp('activated_at').defaultTo(knex.fn.now())
      table.timestamp('deactivated_at')
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = RoadmapPointSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoadmapPointSchema extends Schema {
  up () {
    this.create('roadmap_points', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('roadmap_points')
  }
}

module.exports = RoadmapPointSchema

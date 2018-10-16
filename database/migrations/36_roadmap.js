'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoadmapSchema extends Schema {
  up () {
    this.create('roadmaps', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('roadmaps')
  }
}

module.exports = RoadmapSchema

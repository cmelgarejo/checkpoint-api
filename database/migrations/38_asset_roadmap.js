'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetRoadmapSchema extends Schema {
  up () {
    this.create('asset_roadmaps', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('asset_roadmaps')
  }
}

module.exports = AssetRoadmapSchema

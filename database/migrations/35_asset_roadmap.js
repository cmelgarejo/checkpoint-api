'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'asset_roadmaps'
const assetTableName = 'assets'
const roadmapTableName = 'roadmaps'

class AssetRoadmapSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table.increments()
      table
        .uuid('asset_id')
        .references('id')
        .inTable(assetTableName)
      table
        .uuid('roadmap_id')
        .references('id')
        .inTable(roadmapTableName)
      table.timestamps()
    })
  }

  down () {
    this.drop(tableName)
  }
}

module.exports = AssetRoadmapSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'asset_pois'
const assetTableName = 'assets'
const poiTableName = 'pois'

class AssetPoiSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table.increments()
      table
        .uuid('asset_id')
        .references('id')
        .inTable(assetTableName)
      table
        .uuid('poi_id')
        .references('id')
        .inTable(poiTableName)
      table.timestamps()
    })
  }

  down () {
    this.drop(tableName)
  }
}

module.exports = AssetPoiSchema

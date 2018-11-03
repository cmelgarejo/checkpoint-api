'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'asset_geofences'
const assetTableName = 'assets'
const geofenceTableName = 'geofences'

class AssetGeofenceSchema extends Schema {
  up () {
    this.create(tableName, (table) => {
      table.increments()
      table
        .uuid('asset_id')
        .references('id')
        .inTable(assetTableName)
      table
        .uuid('geofence_id')
        .references('id')
        .inTable(geofenceTableName)
      table.timestamps()
    })
  }

  down () {
    this.drop(tableName)
  }
}

module.exports = AssetGeofenceSchema

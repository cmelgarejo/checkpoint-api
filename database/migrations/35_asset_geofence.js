'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetGeofenceSchema extends Schema {
  up () {
    this.create('asset_geofences', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('asset_geofences')
  }
}

module.exports = AssetGeofenceSchema

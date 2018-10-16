'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetPoiSchema extends Schema {
  up () {
    this.create('asset_pois', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('asset_pois')
  }
}

module.exports = AssetPoiSchema

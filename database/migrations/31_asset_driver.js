'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetDriverSchema extends Schema {
  up () {
    this.create('asset_drivers', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('asset_drivers')
  }
}

module.exports = AssetDriverSchema

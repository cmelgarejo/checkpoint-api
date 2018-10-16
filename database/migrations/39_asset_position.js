'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetPositionSchema extends Schema {
  up() {
    this.create('asset_positions', table => {
      table.increments()
      table.timestamps()
    })
  }

  down() {
    this.drop('asset_positions')
  }
}

module.exports = AssetPositionSchema

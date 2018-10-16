'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetEventSchema extends Schema {
  up () {
    this.create('asset_events', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('asset_events')
  }
}

module.exports = AssetEventSchema

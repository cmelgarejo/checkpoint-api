'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetGroupSchema extends Schema {
  up () {
    this.create('asset_groups', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('asset_groups')
  }
}

module.exports = AssetGroupSchema

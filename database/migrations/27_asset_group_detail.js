'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetGroupDetailSchema extends Schema {
  up () {
    this.create('asset_group_details', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('asset_group_details')
  }
}

module.exports = AssetGroupDetailSchema

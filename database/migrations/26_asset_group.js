'use strict'

// Related directly to user, an asset group should always be created 'DEFAULT' and when an asset is created, it should ALWAYS be assigned a group.

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetGroupSchema extends Schema {
  up() {
    this.create('asset_groups', table => {
      table
        .integer('asset_id')
        .references('id')
        .inTable(assetTableName)
      table.timestamps()
    })
  }

  down() {
    this.drop('asset_groups')
  }
}

module.exports = AssetGroupSchema

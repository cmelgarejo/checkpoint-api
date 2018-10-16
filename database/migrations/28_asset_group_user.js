'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetGroupUserSchema extends Schema {
  up () {
    this.create('asset_group_users', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('asset_group_users')
  }
}

module.exports = AssetGroupUserSchema

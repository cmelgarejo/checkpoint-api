'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'asset_types'

class AssetTypeSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table.increments()
      table.text('name').notNullable()
      table.text('description').notNullable()
      table.boolean('vehicle').defaultTo(true)
      table.boolean('active').defaultTo(true)
      table.timestamp('activated_at').defaultTo(this.fn.now())
      table.timestamp('deactivated_at')
      table.jsonb('images')
      table.jsonb('metadata')
      table.timestamps(true, true)
    })
  }

  async down () {
    // await this.db.raw(`DROP TABLE IF EXISTS ${tableName} CASCADE;`) // this.drop(tableName)
    await this.db.raw(`DROP TABLE IF EXISTS ${tableName} CASCADE;`)
  }
}

module.exports = AssetTypeSchema

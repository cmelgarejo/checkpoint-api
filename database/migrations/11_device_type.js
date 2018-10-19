'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'device_types'
class DeviceTypeSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table.increments()
      table.text('name').notNullable()
      table.text('description')
      table.integer('accuracy')
      table.jsonb('images')
      table.boolean('active').defaultTo(true)
      table.jsonb('metadata')
      table.timestamps()
    })
  }

  async down() {
    await this.db.raw(`DROP TABLE IF EXISTS ${tableName} CASCADE;`) // this.drop(tableName)
  }
}

module.exports = DeviceTypeSchema

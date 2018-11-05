'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'devices'
const userTableName = 'users'
const deviceTypeTableName = 'device_types'

class DeviceSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table
        .uuid('id')
        .unique()
        .defaultTo(this.db.raw('public.gen_random_uuid()'))
      table
        .integer('device_type_id')
        .references('id')
        .inTable(deviceTypeTableName)
      table
        .uuid('user_id')
        .references('id')
        .inTable(userTableName)
      table.text('unit_id').notNullable()
      table.text('imei')
      table.text('uuid')
      table.jsonb('images')
      table.jsonb('metadata')
      table.boolean('active').defaultTo(true)
      table.timestamp('activated_at').defaultTo(knex.fn.now())
      table.timestamp('deactivated_at')
      table.timestamps()
    })
  }

  async down() {
    await this.db.raw(`DROP TABLE IF EXISTS ${tableName} CASCADE;`)
  }
}

module.exports = DeviceSchema

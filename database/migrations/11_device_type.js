'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeviceTypeSchema extends Schema {
  up() {
    this.create('device_types', table => {
      table
        .uuid('id')
        .unique()
        .defaultTo(this.db.raw('public.gen_random_uuid()'))
      table.timestamps()
    })
  }

  down() {
    this.drop('device_types')
  }
}

module.exports = DeviceTypeSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeviceSchema extends Schema {
  up() {
    this.create('devices', table => {
      table
        .uuid('user_id')
        .references('id')
        .inTable(usersTablename)
      table.timestamps()
    })
  }

  down() {
    this.drop('devices')
  }
}

module.exports = DeviceSchema

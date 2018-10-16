'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GeofenceSchema extends Schema {
  up () {
    this.create('geofences', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('geofences')
  }
}

module.exports = GeofenceSchema

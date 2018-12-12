'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'geofences'
const userTableName = 'users'
class GeofenceSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table
        .uuid('id')
        .unique()
        .defaultTo(this.db.raw('public.gen_random_uuid()'))
      table
        .uuid('user_id')
        .references('id')
        .inTable(userTableName)
      table.text('name').defaultTo('G')
      table.text('description')
      table.text('polygon').comment('The polygon definition')
      table
        .text('emails')
        .comment(
          'Optional: if this is set, it will only send the alert to these contacts, otherwise will use what is set on AssetGroup'
        )
      table
        .text('phones')
        .comment(
          'Optional: if this is set, it will only send the alert to these contacts, otherwise will use what is set on AssetGroup'
        )
      table.date('otd').comment('A one time date (it will work just that day)')
      table
        .text('active_days')
        .comment('Array indicating the active days of the geofence')
      table.time('start_time').comment('Starting check time of the day')
      table.time('end_time').comment('Ending check time of the day')
      table
        .boolean('always_on')
        .defaultTo(false)
        .comment('This will be true if the geofence is always on')
      table
        .boolean('alert_on_leave')
        .defaultTo(false)
        .comment('Alert should be sent if the asset leaves the geofence')
      table.jsonb('metadata')
      table.boolean('shareable').defaultTo(false)
      table.boolean('active').defaultTo(true)
      table.timestamp('activated_at').defaultTo(this.fn.now())
      table.timestamp('deactivated_at')
      table.timestamps(true, true)
      table.index('user_id')
    })
  }

  down () {
    this.drop(tableName)
  }
}

module.exports = GeofenceSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'roadmaps'
const userTableName = 'users'

class RoadmapSchema extends Schema {
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
      table.text('notes')
      table
        .text('emails')
        .comment(
          'Optional: if this is set, it will only send the alert to these contacts, otherwise will use what is set on AssetGroup'
        )
      table
        .text('phones')
        .comment(
          'Optional: if this is set, it will only send the alert to contacts, otherwise will use what is set on AssetGroup'
        )
      table.date('otd').comment('A one time date (it will work just that day)')
      table
        .string('interval', 1)
        .comment('Roadmap activation: d = daily| w = weekly')
      // Days of week onyl works when interval es 'w'
      table
        .text('days_of_week')
        .comment('Array indicating the active days of the roadmap 0~6')
      table
        .integer('repeat')
        .comment('Time that has to pass to repeat since last activation')
      table.time('start_time').comment('Starting check time of the day')
      table.time('end_time').comment('Ending check time of the day')
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

module.exports = RoadmapSchema

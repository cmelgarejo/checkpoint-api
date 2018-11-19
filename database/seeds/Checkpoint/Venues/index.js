'use strict'

/*
|--------------------------------------------------------------------------
| Venue
|--------------------------------------------------------------------------
|
| Creates the default measure units that the Checkpoint System uses
|
*/

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Venue = use('App/Models/Venue')

module.exports = async (users) => {
  let venue = new Venue()
  venue.user_id = users[0].id
  venue.name = 'Admin Venue'
  venue.description = 'Admin venue that is by default'
  venue.address = 'Nueva asunción 380'
  venue.lat = -25.337036
  venue.lon = -57.500219
  venue.detection_radius = 50
  // venue.images = {}
  // venue.metadata = {}
  await venue.save()

  venue = new Venue()
  venue.user_id = users[1].id
  venue.name = 'Casa Abau'
  venue.description = 'La casa de abau'
  venue.address = '1ro.de Mayo 241'
  venue.lat = -25.337036
  venue.lon = -57.500219
  // venue.detection_radius = 50
  // venue.images = {}
  // venue.metadata = {}
  await venue.save()

  console.info('Created default venues')
}

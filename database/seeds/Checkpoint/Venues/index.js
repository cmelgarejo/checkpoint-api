'use strict'
/** @type {typeof import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger')

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
const uuid = use('uuid')

const venueTypes = {
  generic: 1,
  store: 2,
  generalStore: 3,
  supermarket: 4,
  pharmacy: 5,
  corporateBuilding: 6,
  shoppingMall: 7
}

module.exports = async (users) => {
  let venue = new Venue()
  venue.user_id = users[0].id
  venue.name = 'Admin Venue'
  venue.description = 'A default venue, generic, to have something to see'
  venue.address = 'Nueva asunción 380'
  venue.lat = -25.337036
  venue.lon = -57.500219
  venue.detection_radius = 50
  venue.venue_type_id = venueTypes.generic
  venue.images = [{ id: uuid.v4(), resource: 'https://assets.change.org/photos/2/po/sb/brpOSBsZjNvhbER-800x450-noPad.jpg?1539459933' }]
  // venue.images = []
  // venue.metadata = {}
  await venue.save()

  venue = new Venue()
  venue.user_id = users[1].id
  venue.name = 'Pinedo Shopping'
  venue.description = 'Centro comercial Pinedo Shopping'
  venue.address = 'Av. Mariscal López, San Lorenzo'
  venue.lat = -25.323770
  venue.lon = -57.520440
  venue.venue_type_id = venueTypes.shoppingMall
  venue.images = [{ id: uuid.v4(), resource: 'http://www.pinedo.com.py/wp-content/uploads/2016/03/Website7.jpg' }]
  await venue.save()
  venue.user_id = users[0].id
  await venue.save()

  venue = new Venue()
  venue.user_id = users[1].id
  venue.name = 'Shopping Multiplaza'
  venue.description = 'Centro comercial Multiplaza'
  venue.address = 'PY, 4501, Av Eusebio Ayala, Asunción'
  venue.lat = -25.317017
  venue.lon = -57.571728
  venue.venue_type_id = venueTypes.shoppingMall
  venue.images = [{ id: uuid.v4(), resource: 'https://farm5.staticflickr.com/4545/38153142764_aac5aac2a5_z.jpg' }]
  await venue.save()
  venue.user_id = users[0].id
  await venue.save()

  venue = new Venue()
  venue.user_id = users[1].id
  venue.name = 'Punto Farma'
  venue.description = 'Farmacia Punto Farma'
  venue.address = 'PY, 4501, Av Eusebio Ayala, Asunción'
  venue.lat = -25.301216
  venue.lon = -57.565166
  venue.venue_type_id = venueTypes.pharmacy
  venue.images = [{ id: uuid.v4(), resource: 'https://lh5.googleusercontent.com/p/AF1QipM3T1PhJ9eD2oAVT30k6vlMJEBtMwCyPXrelSEk=s396-k-no' }]
  await venue.save()
  venue.user_id = users[0].id
  await venue.save()
  // -25.301216, -57.565166

  Logger.info('Created default venues')
}

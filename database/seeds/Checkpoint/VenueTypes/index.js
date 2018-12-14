'use strict'
/** @type {typeof import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger')

/*
|--------------------------------------------------------------------------
| VenueType
|--------------------------------------------------------------------------
|
| Creates the default venue types that the Checkpoint System
|
*/

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const VenueType = use('App/Models/VenueType')

module.exports = async () => {
  let venueType = new VenueType()
  venueType.name = 'Generic'
  venueType.description = 'Generic Venue Type'
  // venueType.images = {}
  // venueType.metadata = {}
  await venueType.save()

  venueType = new VenueType()
  venueType.name = 'Store'
  venueType.description = 'Store Venue Type'
  // venueType.images = {}
  // venueType.metadata = {}
  await venueType.save()

  venueType = new VenueType()
  venueType.name = 'General Store'
  venueType.description = 'General Store Venue Type'
  // venueType.images = {}
  // venueType.metadata = {}
  await venueType.save()

  venueType = new VenueType()
  venueType.name = 'Supermarket'
  venueType.description = 'Supermarket Venue Type'
  // venueType.images = {}
  // venueType.metadata = {}
  await venueType.save()

  venueType = new VenueType()
  venueType.name = 'Pharmacy'
  venueType.description = 'Pharmacy Venue Type'
  // venueType.images = {}
  // venueType.metadata = {}
  await venueType.save()

  venueType = new VenueType()
  venueType.name = 'Corporate Building'
  venueType.description = 'Corporate Building Venue Type'
  // venueType.images = {}
  // venueType.metadata = {}
  await venueType.save()

  venueType = new VenueType()
  venueType.name = 'Shopping Mall'
  venueType.description = 'Shopping Mall'
  // venueType.images = {}
  // venueType.metadata = {}
  await venueType.save()

  Logger.info('Created default venue types')
}

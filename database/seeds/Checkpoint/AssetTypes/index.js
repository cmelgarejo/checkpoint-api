'use strict'
/** @type {typeof import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger')

/*
|--------------------------------------------------------------------------
| AssetType
|--------------------------------------------------------------------------
|
| Creates the default measure units that the Checkpoint System uses
|
*/

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const AssetType = use('App/Models/AssetType')

module.exports = async () => {
  let assetType = new AssetType()
  assetType.name = 'Generic Static Asset'
  assetType.description = 'Not specific static asset'
  assetType.vehicle = false
  // assetType.images = {}
  // assetType.metadata = {}
  await assetType.save()

  assetType = new AssetType()
  assetType.name = 'Generic Vehicle'
  assetType.description = 'Not specific vehicle asset'
  assetType.vehicle = true
  // assetType.images = {}
  // assetType.metadata = {}
  await assetType.save()

  assetType = new AssetType()
  assetType.name = 'Bike'
  assetType.description = 'Bicycle'
  assetType.vehicle = true
  // assetType.images = {}
  // assetType.metadata = {}
  await assetType.save()

  assetType = new AssetType()
  assetType.name = 'Car'
  assetType.description = 'Car'
  assetType.vehicle = true
  // assetType.images = {}
  // assetType.metadata = {}
  await assetType.save()

  assetType = new AssetType()
  assetType.name = 'Moto'
  assetType.description = 'Motorcycle'
  assetType.vehicle = true
  // assetType.images = {}
  // assetType.metadata = {}
  await assetType.save()

  assetType = new AssetType()
  assetType.name = 'Truck'
  assetType.description = 'Truck'
  assetType.vehicle = true
  // assetType.images = {}
  // assetType.metadata = {}
  await assetType.save()

  assetType = new AssetType()
  assetType.name = 'Van'
  assetType.description = 'Van'
  assetType.vehicle = true
  // assetType.images = {}
  // assetType.metadata = {}
  await assetType.save()

  assetType = new AssetType()
  assetType.name = 'Semi'
  assetType.description = 'Semi'
  assetType.vehicle = true
  // assetType.images = {}
  // assetType.metadata = {}
  await assetType.save()

  Logger.info('Created default asset types')
}

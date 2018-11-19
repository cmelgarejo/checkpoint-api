'use strict'

/*
|--------------------------------------------------------------------------
| MeasureUnit
|--------------------------------------------------------------------------
|
| Creates the default measure units that the Checkpoint System uses
|
*/

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const MeasureUnit = use('App/Models/MeasureUnit')

module.exports = async () => {
  let measureUnit = new MeasureUnit()
  measureUnit.name = 'mg'
  measureUnit.description = 'Miligram'
  // measureUnit.notes = {}
  // measureUnit.metadata = {}
  await measureUnit.save()

  measureUnit = new MeasureUnit()
  measureUnit.name = 'g'
  measureUnit.description = 'Gram'
  // measureUnit.notes = {}
  // measureUnit.metadata = {}
  await measureUnit.save()

  measureUnit = new MeasureUnit()
  measureUnit.name = 'kg'
  measureUnit.description = 'Kilogram'
  // measureUnit.notes = {}
  // measureUnit.metadata = {}
  await measureUnit.save()

  measureUnit = new MeasureUnit()
  measureUnit.name = 'mm'
  measureUnit.description = 'Milimeter'
  // measureUnit.notes = {}
  // measureUnit.metadata = {}
  await measureUnit.save()

  measureUnit = new MeasureUnit()
  measureUnit.name = 'cm'
  measureUnit.description = 'Centimeter'
  // measureUnit.notes = {}
  // measureUnit.metadata = {}
  await measureUnit.save()

  measureUnit = new MeasureUnit()
  measureUnit.name = 'm'
  measureUnit.description = 'Meter'
  // measureUnit.notes = {}
  // measureUnit.metadata = {}
  await measureUnit.save()

  console.info('Created default measure units')
}

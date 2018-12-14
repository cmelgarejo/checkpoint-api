'use strict'
/** @type {typeof import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger')
/*
|--------------------------------------------------------------------------
| Roles
|--------------------------------------------------------------------------
|
| Creates the Roles
|
*/

const userPermissions = use('./User')
const venuePermissions = use('./Venue')

module.exports = async () => {
  Logger.info(`>> Creating permissions`)
  return {
    users: await userPermissions(),
    venues: await venuePermissions()
  }
}

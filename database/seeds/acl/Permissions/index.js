'use strict'

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
  console.info(`>> Creating permissions`)
  return {
    users: await userPermissions(),
    venues: await venuePermissions(),
  }
}

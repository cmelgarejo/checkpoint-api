'use strict'
/** @type {typeof import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger')
/*
|--------------------------------------------------------------------------
| CheckpointSeeder
|--------------------------------------------------------------------------
|
| Setups all the needed data to have a functioning Checkpoint system
|
*/
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')
const createAclPermissions = use('./ACL/Permissions')
const createAclRoles = use('./ACL/Roles')
const createVenueTypes = use('./Checkpoint/VenueTypes')
const createMeasureUnits = use('./Checkpoint/MeasureUnits')
const createAssetTypes = use('./Checkpoint/AssetTypes')
const createVenues = use('./Checkpoint/Venues')

class CheckpointSeeder {
  async run () {
    Logger.info('>>> Creating Roles and Permissions')
    const permissions = await createAclPermissions()
    const roles = await createAclRoles(permissions)

    Logger.info('>>> Creating default user')
    const firstUser = await User.create({
      username: process.env.APP_ADMIN_USERNAME,
      password: process.env.APP_ADMIN_PASSWORD,
      name: process.env.APP_ADMIN_NAME,
      profile_pic: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
      email: process.env.APP_ADMIN_EMAIL
    })
    await firstUser.roles().attach(Object.values(roles))

    Logger.info('>>> Creating test user')
    const secondUser = await User.create({
      username: 'test',
      password: 'test',
      name: 'Test User',
      profile_pic: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
      email: 'test@centralgps.net'
    })
    await secondUser.roles().attach(roles.user)

    Logger.info('>>> Adding default reference table values')
    await createVenueTypes()
    await createMeasureUnits()
    await createAssetTypes()
    await createVenues([firstUser, secondUser])
  }
}

module.exports = CheckpointSeeder

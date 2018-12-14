'use strict'
/** @type {typeof import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger')

/*
|--------------------------------------------------------------------------
| User Permissions
|--------------------------------------------------------------------------
|
| Creates the default permissions for the actions on venues
|
*/

const Permission = use('Adonis/Acl/Permission')

module.exports = async () => {
  let permissionIds = []
  let permission = new Permission()
  permission.slug = 'create_venues'
  permission.name = 'Create Venues'
  permission.description = 'Create venues permission'
  await permission.save()
  permissionIds.push(permission.id)

  permission = new Permission()
  permission.slug = 'read_venues'
  permission.name = 'Read Venues'
  permission.description = 'Read venues permission'
  await permission.save()
  permissionIds.push(permission.id)

  permission = new Permission()
  permission.slug = 'update_venues'
  permission.name = 'Update Venues'
  permission.description = 'Update venues permission'
  await permission.save()
  permissionIds.push(permission.id)

  permission = new Permission()
  permission.slug = 'delete_venues'
  permission.name = 'Delete Venues'
  permission.description = 'Delete venues permission'
  await permission.save()
  permissionIds.push(permission.id)

  Logger.info('Created permissions: [venues]')

  return permissionIds
}

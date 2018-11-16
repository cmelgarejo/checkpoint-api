'use strict'

/*
|--------------------------------------------------------------------------
| User Permissions
|--------------------------------------------------------------------------
|
| Creates the default permissions for the actions on users
|
*/

const Permission = use('Adonis/Acl/Permission')

module.exports = async () => {
  let permissionIds = []
  let permission = new Permission()
  permission.slug = 'create_users'
  permission.name = 'Create Users'
  permission.description = 'Create admin users permission'
  await permission.save()
  permissionIds.push(permission.id)

  permission = new Permission()
  permission.slug = 'read_users'
  permission.name = 'Read Users'
  permission.description = 'Read admin users permission'
  await permission.save()
  permissionIds.push(permission.id)

  permission = new Permission()
  permission.slug = 'update_users'
  permission.name = 'Update Users'
  permission.description = 'Update admin users permission'
  await permission.save()
  permissionIds.push(permission.id)

  permission = new Permission()
  permission.slug = 'delete_users'
  permission.name = 'Delete Users'
  permission.description = 'Delete admin users permission'
  await permission.save()
  permissionIds.push(permission.id)

  console.info('Created permissions: [users]')

  return permissionIds
}

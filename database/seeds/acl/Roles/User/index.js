'use strict'

/*
|--------------------------------------------------------------------------
| User Role
|--------------------------------------------------------------------------
|
| Define the common [user] role (minimum permissions to use the app)
|
*/

const Role = use('Adonis/Acl/Role')

module.exports = async (permissions = undefined) => {
  const role = new Role()
  role.name = 'User'
  role.slug = 'user'
  role.description = 'Common API user privileges'
  if (await role.save()) {
    console.info(`Created role: [${role.name}]`)
    if (permissions) await role.permissions().attach([...permissions['venues']])
  }
  return { [role.slug]: role }
}

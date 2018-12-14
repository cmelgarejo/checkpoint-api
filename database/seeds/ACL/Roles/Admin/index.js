'use strict'
/** @type {typeof import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger')

/*
|--------------------------------------------------------------------------
| Admin Role
|--------------------------------------------------------------------------
|
| Define the [administrator] role
|
*/

const Role = use('Adonis/Acl/Role')

module.exports = async (permissions = undefined) => {
  const role = new Role()
  role.name = 'Administrator'
  role.slug = 'administrator'
  role.description = 'Manage administration privileges'
  if (await role.save()) {
    Logger.info(`Created role: [${role.name}]`)
    if (permissions) await role.permissions().attach([...permissions['users']])
  }
  return { [role.slug]: role.id }
}

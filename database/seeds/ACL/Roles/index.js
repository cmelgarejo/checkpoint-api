'use strict'
/** @type {typeof import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger')

/*
|--------------------------------------------------------------------------
| Roles
|--------------------------------------------------------------------------
|
| Creates user roles
|
*/

const Admin = use('./Admin')
const User = use('./User')

module.exports = async (permissions = undefined) => {
  Logger.info(`>> Creating Roles`)
  const adminRole = await Admin(permissions)
  const userRole = await User(permissions)
  return {
    ...adminRole,
    ...userRole
  }
}

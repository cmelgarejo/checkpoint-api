'use strict'

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
  console.info(`>> Creating Roles`)
  const adminRole = await Admin(permissions)
  const userRole = await User(permissions)
  return {
    ...adminRole,
    ...userRole
  }
}

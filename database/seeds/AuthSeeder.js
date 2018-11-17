'use strict'

/*
|--------------------------------------------------------------------------
| AuthSeeder
|--------------------------------------------------------------------------
|
| Setups all the needed data to have a functioning ACL and auth information
|
*/
const User = use('App/Models/User')
const createAclPermissions = use('./acl/Permissions')
const createAclRoles = use('./acl/Roles')

class AuthSeeder {
  async run() {
    console.info('>>> Creating Roles and Permissions')
    const permissions = await createAclPermissions()
    const roles = await createAclRoles(permissions)
    console.info('>>> Creating default user')
    const firstUser = await User.create({
      username: process.env.APP_ADMIN_USERNAME,
      password: process.env.APP_ADMIN_PASSWORD,
      email: process.env.APP_ADMIN_EMAIL
    })
    await firstUser.roles().attach(Object.values(roles))
  }
}

module.exports = AuthSeeder

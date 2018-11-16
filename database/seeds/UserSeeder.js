'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Creates a random user with mocked data
|
*/

const Factory = use('Factory')

class UserSeeder {
  async run() {
    console.info('>>> Creating user')
    await Factory.model('App/Models/User').create()
  }
}

module.exports = UserSeeder

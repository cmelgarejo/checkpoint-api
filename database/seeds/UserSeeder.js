'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Creates a random user with mocked data
|
*/
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Factory = use('Factory')

class UserSeeder {
  async run () {
    console.info('>>> Creating user')
    await Factory.model('App/Models/User').create()
  }
}

module.exports = UserSeeder

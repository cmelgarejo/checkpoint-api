'use strict'
/** @type {typeof import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger')

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
    Logger.info('>>> Creating user')
    await Factory.model('App/Models/User').create()
  }
}

module.exports = UserSeeder

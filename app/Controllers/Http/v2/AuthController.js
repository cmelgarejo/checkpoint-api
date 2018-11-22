'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

/**
 * Resourceful controller for interacting with users
 */
class AuthController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx.ally
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async facebook ({ ally, request, response }) {
    const user = await ally.driver('facebook').getUser()
    const dbUser = await User.findByOrFail('email', user.getEmail)
    console.log(dbUser)
    await User.create({
      email: user.getEmail(),
      username: user.getEmail(),
      password: user.getEmail(),
      metadata: user.getOriginal()
    })
    return 'bienvenido!'
  }
}

module.exports = AuthController

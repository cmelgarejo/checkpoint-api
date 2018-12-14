'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
/** @type {typeof import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger')
const User = use('App/Models/User')
const JsonApiRB = use('JsonApiRecordBrowser')
/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index ({ request }) {
    // if has permissions, show all users
    const res = await JsonApiRB.model(User)
    return res
      .request(request.get()) // handle request
      .paginateOrFetch()
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ request }) {
    const { id } = request.body
    const user = await User.findOrFail(id)
    const allowedParams = await User.cleanParams(request.post())
    user.merge({
      ...allowedParams // ...request.post()
    })
    const result = await user.save()
    if (!result) {
      Logger.error(`Error updating user: ${result}`)
      throw new Error('Could not be saved')
    }
    return user
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show ({ params }) {
    const { id } = params
    const user = await User.findOrFail(id)
    return user
  }

  /**
   * Display the current user data.
   * GET users/me
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {auth} ctx.auth
   */
  async me ({ response, auth }) {
    const user = await auth.getUser()
    return user
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ request }) {
    const { id } = request.body
    const user = await User.findOrFail(id)
    user.delete()
  }

  /**
   * Generates an API Key.
   * POST users/apikey
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async generateAPIKey ({ response, auth }) {
    const user = await auth.getUser()
    const authAPI = await auth.authenticator('api')
    await authAPI.revokeTokensForUser(user)
    const token = await authAPI.generate(user)
    response.status(201)
    return token
  }

  /**
   * Generates an JWT Key.
   * POST users/token
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async generateJWTKey ({ response, auth }) {
    const user = await auth.getUser()
    const authAPI = await auth.authenticator('jwt')
    await authAPI.revokeTokensForUser(user)
    const token = await authAPI.withRefreshToken().generate(user)
    response.status(201)
    return token
  }

  /**
   * Refreshes an JWT Key.
   * POST users/token
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async refreshJWTKey ({ response, auth }) {
    const user = await auth.getUser()
    const authAPI = await auth.authenticator('jwt')
    const token = await authAPI.generate(user)
    response.status(201)
    return token
  }
}

module.exports = UserController

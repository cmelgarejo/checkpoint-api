'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @typedef {import('@adonisjs/auth/src/Schemes/Session')} AuthSession */
/** @type {import('@adonisjs/framework/src/Logger')} */
/** @type {import('adonis-acl/src/Exceptions/ForbiddenException')} */
const Logger = use('Logger')
const ForbiddenException = use('adonis-acl/src/exceptions/ForbiddenException')

class ActiveUser {
  /**
   * IF the user is not active, the API should block any attempt to access data
   * @param {object} ctx
   * @param {AuthSession} ctx.auth
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {Function} next
   */
  async handle ({ auth, request, response }, next) {
    try {
      if (auth && auth.getAuthHeader()) {
        let user = null
        // If the schema is not jwt
        // (always assumes it is, so, let it fail to change to 'api')
        try {
          user = await auth.getUser()
        } catch (error) {
          user = await auth.authenticator('api').getUser()
        }
        if (user && !user.active) {
          throw new ForbiddenException()
        }
      }
    } catch (error) {
      Logger.error(error.toString())
    }
    // call next to advance the request
    await next()
  }
}

module.exports = ActiveUser

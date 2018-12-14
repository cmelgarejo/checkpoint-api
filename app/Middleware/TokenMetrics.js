'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger')
const _originalURL = '/v2/auth/me'
class TokenMetrics {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, auth }, next) {
    await this.handleTokenMetrics(request, auth)
    await next()
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handleTokenMetrics (request, auth) {
    try {
      if (auth && auth.user && request.url() !== _originalURL) {
        const activeToken = await auth.user.activeToken().first()
        if (activeToken !== null) {
          await activeToken.tokenMetrics().create({
            ref: request.url(),
            metadata: {
              headers: request.headers(),
              originalUrl: request.originalUrl(),
              method: request.method(),
              ip: request.ip(),
              ips: request.ips(),
              subdomains: request.subdomains(),
              hostname: request.hostname(),
              requestAll: request.all()
            }
          })
        }
      }
    } catch (error) {
      Logger.error(error.toString())
    }
  }
}

module.exports = TokenMetrics

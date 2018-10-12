'use strict'
const TokenMetric = use('App/Models/TokenMetric')

class TokenMetrics {
  async handle({ request, auth }, next) {
    const authAPI = await auth.authenticator('jwt')
    const user = await authAPI.getUser()
    const activeToken = await user.activeToken().first()
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
          requestAll: request.all(),
        },
      })
    }
    await next()
  }
  async wsHandle({ request }, next) {
    // call next to advance the request
    await next()
  }
}

module.exports = TokenMetrics

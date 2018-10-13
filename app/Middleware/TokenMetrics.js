'use strict'
const TokenMetric = use('App/Models/TokenMetric')

class TokenMetrics {
  async handle({ request, auth }, next) {
    await this.handleTokenMetrics(request, auth)
    await next()
  }

  async wsHandle({ request, auth }, next) {
    await handleTokenMetrics(request, auth)
    await next()
  }
  async handleTokenMetrics(request, auth) {
    try {
      // console.log(auth.user)
      // const authAPI = await auth.authenticator('api')
      // const user = await authAPI.getUser()
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
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = TokenMetrics

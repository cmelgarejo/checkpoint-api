'use strict'
const User = use('App/Models/User')
const JsonApiRB = use('JsonApiRecordBrowser')

class UserController {
  async index({ request, params }) {
    //if has permissions, show all users
    return await JsonApiRB.model(User)
      .request(request.get()) //handle request
      .paginateOrFetch()
  }

  async update({ request, params }) {
    const { id } = params
    const user = await User.findOrFail(id)
    user.merge({
      ...request.post()
    })
    if (!(await user.save())) throw new Error('Could not be saved')
    return user
  }

  async show({ params }) {
    const { id } = params
    const user = await User.findOrFail(id)
    return user
  }

  async destroy({ params }) {
    const { id } = params
    const user = await User.findOrFail(id)
    user.delete()
  }

  async generateAPIKey({ response, auth }) {
    const user = await auth.getUser()
    const authAPI = await auth.authenticator('api')
    await authAPI.revokeTokensForUser(user)
    const token = await authAPI.generate(user)
    response.status(201)
    return token
  }

  async generateJWTKey({ response, auth }) {
    const user = await auth.getUser()
    const authAPI = await auth.authenticator('jwt')
    const token = await authAPI.generate(user)
    response.status(201)
    return token
  }
}

module.exports = UserController

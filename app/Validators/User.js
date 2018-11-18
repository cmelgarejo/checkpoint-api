'use strict'
const { formatters } = use('Validator')
const JsonApi = use('JsonApi')
const usersNotIn = 'root,admin,super,superadmin'
class UserValidator {
  get sanitizationRules () {
    return {
      email: 'normalize_email',
      username: 'strip_tags|strip_links'
    }
  }

  get rules () {
    const userId = this.ctx.params.id
    if (this.ctx.request.method() === 'PATCH') {
      return {
        email: `email|unique:users,email,id,${userId}`,
        username: `not_in:${usersNotIn}`
      }
    }
    return {
      email: 'required|email|unique:users,email',
      username: `not_in:${usersNotIn}`
    }
  }

  get formatter () {
    return formatters.JsonApi
  }

  async fails ({ errors }) {
    for (const error of errors) {
      const jsonError = JsonApi.JSE.UnprocessableResourceObject.invoke()
      jsonError.detail = error.detail
      jsonError.source = error.source
      JsonApi.pushError(jsonError)
    }
    return this.ctx.response
      .status(JsonApi.getJsonErrorStatus())
      .send(JsonApi.getJsonError())
  }
}

module.exports = UserValidator

'use strict'
const { formatters } = use('Validator')
const JsonApi = use('JsonApi')

class StoreVenue {
  get sanitizationRules () {
    return {
      email: 'normalize_email',
      username: 'strip_tags|strip_links'
    }
  }

  get rules () {
    // const userId = this.ctx.params.id
    if (this.ctx.request.method() === 'PATCH') {
      return {
      }
    }
    return {
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

module.exports = StoreVenue

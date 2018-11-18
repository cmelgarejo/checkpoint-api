'use strict'
const Logger = use('Logger')
const BaseExceptionHandler = use('BaseExceptionHandler')

const JsonApi = use('JsonApi')
// const {
//   JsonApiException
// } = require('@dinevillar/adonis-json-api-serializer/src/Exceptions')

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle (error, options) {
    // const { request, response } = options
    // switch (error.name) {
    //   case 'error':
    //     Logger.error(error.message)
    //     JsonApi.handleError(error, options)
    //     //response.status(500).send({ error: 'internal server error' })
    //     break
    //   case 'ModelNotFoundException':
    //     response.status(404).send(404)
    //     break
    //   default:
    //     Logger.error(error.message)
    //     JsonApi.handleError(error, options)
    // }
    JsonApi.handleError(error, options)
    super.handle(...arguments)
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report (error, { request }) {
    Logger.error(
      error.message,
      'Request: ',
      request.method(),
      request.url(),
      'Params: ',
      request.all()
    )
  }
}

module.exports = ExceptionHandler

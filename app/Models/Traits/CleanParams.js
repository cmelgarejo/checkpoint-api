'use strict'
/** @type {typeof import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger')

class CleanParams {
  async register (Model, customOptions = {}) {
    try {
      let validColumns = await Model.query()
        .db.table(Model.table)
        .columnInfo(Model.table)
      validColumns = Object.keys(validColumns)
      Model.cleanParams = function (params) {
        for (let key in params) {
          if (!~validColumns.indexOf(key)) delete params[key]
        }
        return params
      }
    } catch (error) {
      Logger.error(error)
      return null
    }
  }
}

module.exports = CleanParams

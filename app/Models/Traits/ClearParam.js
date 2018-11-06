'use strict'

class ClearParam {
  async register(Model, customOptions = {}) {
    try {
      console.log('about to run....')
      let validColumns = await Model.query()
        .columnInfo()
        .fetch()
      console.log(validColumns)
      validColumns = Object.keys(validColumns)

      Model.clearParams = function(params) {
        for (let key in params) {
          if (!~validColumns.indexOf(key)) delete params[key]
        }
        return params
      }
    } catch (error) {
      console.error(error)
      return null
    }
  }
}

module.exports = ClearParam

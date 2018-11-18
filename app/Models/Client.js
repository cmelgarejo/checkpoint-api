'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
  /**
   * Gets the active contacts for this contacts
   *
   * @method contacts
   *
   * @return {Object}
   */
  contacts () {
    return this.hasMany('App/Models/ClientContact')
  }
}

module.exports = Client

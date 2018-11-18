'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ClientContact extends Model {
  /**
   * Gets the client for this contact
   *
   * @method client
   *
   * @return {Object}
   */
  client () {
    return this.belongsTo('App/Models/Client')
  }
}

module.exports = ClientContact

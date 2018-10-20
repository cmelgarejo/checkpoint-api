'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot() {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get traits() {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission'
      // , 'ClearParams'
    ]
  }

  static get hidden() {
    return ['password']
  }

  static get Serializer() {
    return 'JsonApi/Serializer/LucidSerializer' // Override Lucid/VanillaSerializer
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany('App/Models/Token')
  }

  /**
   * Gets the active token for this use
   *
   * @method activeToken
   *
   * @return {Object}
   */
  activeToken() {
    return this.hasOne('App/Models/Token').where('is_revoked', false)
  }

  devices() {
    return this.hasMany('App/Models/Device')
  }
}

module.exports = User

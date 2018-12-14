'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async instance => {
      if (instance.dirty.aclRoles) delete instance.$attributes.aclRoles
      if (instance.dirty.password) {
        instance.password = await Hash.make(instance.password)
      }
    })

    /**
     * Hook to get the roles of the user embedded into the object
     */
    this.addHook('afterFind', async instance => {
      instance.aclRoles = await instance.getRoles()
    })

    // this.addHook('afterFetch', async instances => {
    //   // TODO: Add role data to the list of instances
    // })

    /**
     * A hook to set de/activated time depending on the active status
     */
    this.addHook('beforeSave', 'ActivateHook.method')
    this.addTrait('@provider:Jsonable', [ 'metadata' ])
  }

  static get traits () {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission',
      'CleanParams'
    ]
  }

  static get hidden () {
    return ['password']
  }

  static get Serializer () {
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
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  /**
   * Gets the token for this user
   *
   * @method activeToken
   *
   * @return {Object}
   */
  activeToken () {
    return this.hasOne('App/Models/Token').where('is_revoked', false)
  }

  /**
   * Gets the simcards for this user
   *
   * @method simcards
   *
   * @return {Object}
   */
  simcards () {
    return this.hasMany('App/Models/Simcard')
  }

  /**
   * Gets the devices for this user
   *
   * @method devices
   *
   * @return {Object}
   */
  devices () {
    return this.hasMany('App/Models/Device')
  }

  /**
   * Gets the assets for this user
   *
   * @method assets
   *
   * @return {Object}
   */
  assets () {
    return this.manyThrough('App/Models/AssetGroup', 'assets')
  }

  /**
   * Gets the assetGroups for this user
   *
   * @method assetGroups
   *
   * @return {Object}
   */
  assetGroups () {
    return this.hasMany('App/Models/AssetGroup')
  }

  /**
   * Gets the geofences for this user
   *
   * @method geofences
   *
   * @return {Object}
   */
  geofences () {
    return this.hasMany('App/Models/Geofence')
  }

  /**
   * Gets the pois for this user
   *
   * @method pois
   *
   * @return {Object}
   */
  pois () {
    return this.hasMany('App/Models/Poi')
  }

  /**
   * Gets the roadmaps for this user
   *
   * @method roadmaps
   *
   * @return {Object}
   */
  roadmaps () {
    return this.hasMany('App/Models/Roadmap')
  }

  /**
   * Gets the activities for this user
   *
   * @method activities
   *
   * @return {Object}
   */
  activities () {
    return this.hasMany('App/Models/Activity')
  }

  /**
   * Gets the clients for this user
   *
   * @method clients
   *
   * @return {Object}
   */
  clients () {
    return this.hasMany('App/Models/Client')
  }

  /**
   * Gets the venues for this user
   *
   * @method venues
   *
   * @return {Object}
   */
  venues () {
    return this.hasMany('App/Models/Venue')
  }

  /**
   * Gets the items for this user
   *
   * @method items
   *
   * @return {Object}
   */
  items () {
    return this.hasMany('App/Models/Item')
  }

  /**
   * Gets the forms for this user
   *
   * @method forms
   *
   * @return {Object}
   */
  forms () {
    return this.hasMany('App/Models/Form')
  }

  /**
   * Gets the rpvfs (RoadmapPointVenueForm) for this user
   *
   * @method rpvfs
   *
   * @return {Object}
   */
  rpvfs () {
    return this.hasMany('App/Models/RoadmapPointVenueForm')
  }

  /**
   * Gets the marks for this user
   *
   * @method marks
   *
   * @return {Object}
   */
  marks () {
    return this.hasMany('App/Models/Mark')
  }
}

module.exports = User

'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Venue = use('App/Models/Venue')
const JsonApiRB = use('JsonApiRecordBrowser')

/**
 * Resourceful controller for interacting with venues
 */
class VenueController {
  /**
   * Get a total count of venues for a given user.
   * GET venues/count
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async count ({ auth, response }) {
    const count = await auth.user.venues().getCount()
    return { total: Number(count) }
  }

  /**
   * Show a list of all venues.
   * GET venues
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index ({ auth, request }) {
    // if admin has to see all?
    // if has permissions, show all venues
    const res = await JsonApiRB.model(Venue)
    return res
      .request(request.get()) // handle request
      .filter({ user_id: auth.user.id })
      .paginateOrFetch()
  }

  /**
   * Update venue details.
   * PUT or PATCH venues/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ auth, request, response }) {
    const { id } = request.body
    const venueQuery = await Venue.query().where({
      id: id,
      user_id: auth.user.id
    }).fetch()
    if (venueQuery.rows.length > 0) {
      const venue = venueQuery.rows[0]
      const allowedParams = {
        ...await Venue.cleanParams(request.post()),
        user_id: undefined
      }
      venue.merge({
        ...allowedParams // ...request.post()
      })
      const result = await venue.save()
      if (!result) { throw new Error('Could not be saved') }
      return venue
    } else { response.status(404).send() }
  }

  /**
   * Display a single venue.
   * GET venues/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show ({ params }) {
    const { id } = params
    const venue = await Venue.findOrFail(id)
    return venue
  }

  /**
   * Delete a venue with id.
   * DELETE venues/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ request }) {
    const { id } = request.body
    const venue = await Venue.findOrFail(id)
    venue.delete()
  }
}

module.exports = VenueController

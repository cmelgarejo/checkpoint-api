/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.get('/', () => ({ up: true }))

/*
|--------------------------------------------------------------------------
| v2
|--------------------------------------------------------------------------
*/

/**
 * User token routes
 */
Route.group(() => {
  // Route.post('users/token/refresh', 'UserController.refreshJWTKey')
  Route.post('users/token', 'UserController.generateJWTKey')
  Route.post('users/apikey', 'UserController.generateAPIKey')
})
  .prefix('/v2')
  .namespace('/v2')
  .middleware(['auth:basic'])

/**
 * Administrative routes
 */
Route.group(() => {
  // Users
  Route.resource('users', 'UserController').validator(
    new Map([[['users.store'], ['User']], [['users.update'], ['User']]])
  )
})
  .prefix('/v2')
  .namespace('/v2')
  .middleware(['jsonApi', 'auth:jwt,api', 'tokenMetrics', 'is: administrator'])

/**
 * Common user routes
 */
Route.group(() => {
  // Venues
  Route.resource('venues', 'VenueController').validator('StoreVenue')
})
  .prefix('/v2')
  .namespace('/v2')
  .middleware([
    'jsonApi',
    'auth:jwt,api',
    'tokenMetrics',
    'is: administrator or user'
  ])

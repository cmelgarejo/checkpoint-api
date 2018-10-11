module.exports = {
  // mediaType: 'application/vnd.api+json',
  mediaType: 'application/json',
  // commonMeta: {
  //   copyright: 'Copyright ' + new Date().getFullYear() + ' centralgps',
  //   documentation: 'https://centralgps.net/docs',
  //   authors: ['Christian Melgarejo Bresanovich - cmelgarejo@centralgps.net']
  // },
  globalOptions: {
    convertCase: 'snake_case',
    unconvertCase: 'camelCase'
  },
  // Register JSON API Types here.
  registry: {
    user: {
      model: 'App/Models/User',
      structure: {
        // links: {
        //   self: data => {
        //     return '/v1/users/' + data.id
        //   }
        // }
        // topLevelLinks: {
        //   self: '/v1/users'
        // }
      }
    }
  }
}

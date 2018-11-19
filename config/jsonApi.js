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
    unconvertCase: 'snake_case'
  },
  // Register JSON API Types here.
  registry: {
    user: {
      model: 'App/Models/User',
      structure: {
        // links: {
        //   self: data => {
        //     return '/v2/users/' + data.id
        //   }
        // }
        // topLevelLinks: {
        //   self: '/v2/users'
        // }
      }
    },
    venue: {
      model: 'App/Models/Venue',
      structure: {
        // links: {
        //   self: data => {
        //     return '/v2/venue/' + data.id
        //   }
        // }
        // topLevelLinks: {
        //   self: '/v2/venue'
        // }
      }
    }
  }
}

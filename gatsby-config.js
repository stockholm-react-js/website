require(`dotenv`).config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  siteMetadata: {
    title: 'Stockholm ReactJS Meetup',
    description: `The web of Stockholm ReactJS Meetup.`,
    author: `joakim-roos`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    /* `gatsby-plugin-postcss`, */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        //boolean to set if classname prefix should have its element and component-name.
        displayName: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/react-logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'sthlm-react-meetup', // (REQUIRED, replace with your own)
        accessToken: `${process.env.API_KEY}`, // (optional API access token)
        pages: [{
          type: 'Event',
          match: '/event/:uid',
          path: '/event',
          component: require.resolve('./src/templates/event.js')
        }],
        previews: false, // (optional, activated Previews. Default: false)
        path: '/preview',
        omitPrismicScript: true, // removes preview functionality, great to avoid rendering jquery and bootstrap. 
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'poppins\:800,900',
        ],
        display: 'swap'
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

module.exports = {
  siteMetadata: {
    title: 'Stockholm ReactJS Meetup',
    description: `Stockholm React JS is a community of people in Stockholm interested in the web framework React.`,
    keywords: 'React JS Meetup, stockholm, web development, meetup group, react',
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
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
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

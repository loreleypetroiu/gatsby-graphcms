require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Gatsby Blog GraphCMS`,
    description: `Gatsby Blog GraphCMS`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Blog GraphCMS`,
        short_name: `blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

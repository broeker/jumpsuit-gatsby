/**
 * gatbsy-config.js is a required file that stores basic configuration and exports the applications React
 * components.
 * @type {{plugins: *[], siteMetadata: {author: string, description: string, title: string, slogan: string}}}
 */

module.exports = {
  siteMetadata: {
    title: `JUMPSUIT.LIFE`,
    description: `Powered by Gatsby and Drupal`,
    author: `broeker@gmail.com`,
    slogan: 'And you shall know me by the color of my jumpsuit',
  },

  plugins: [

    // UTILITY
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,

    // SOURCE DRUPAL
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://dev-jumpsuit.pantheonsite.io/',
        apiBase: 'jsonapi', // endpoint of Drupal server
      },
    },

    // SOURCE GOOGLE SHEETS
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1CqKrChn44fsm3JnWZm6utsvWfJYTp4AKB12VUMW0yT8',
        worksheetTitle: 'Sites',
        credentials: require('./client_secret.json')
      }
    },

    // SOURCE FILESYSTEM (STATIC IMAGES)
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    // SOURCE FILESYSTEM (MARKDOWN CONTENT)
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: "markdown-pages",
      },
    },

    // TRANSFORMER REMARK
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 970,
            },
          },
        ],
      },
    },

    // ALGOLIA
    //{
    //  resolve: `gatsby-plugin-algolia`,
    //  options: {
    //    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //    apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //    queries,
    //    chunkSize: 10000, // default: 1000
    //  },
    //},

    // MANIFEST
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ]
};

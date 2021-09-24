/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-postcss',
    },
    {
      resolve: 'gatsby-plugin-sass'
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'notes',
        path: `${__dirname}/src/notes/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'markdown',
        path: `${__dirname}/src/markdown/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: 'gatsby',
    description: 'web dev portfolio',
    author: 'Patrick Li',
    copyright: `©️ copyright ${new Date().getFullYear()}`,
    contact: 'patrick577@gmail.com'
  }
}

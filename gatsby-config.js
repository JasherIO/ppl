const querystring = require('querystring')
const config = require('./static/data/site/config.json')

const url = 'https://jups.xyz/API/scrimsmans/top10elo.php'
const key = 'UhFOsphJOF7ELrArEa6HQK5s'
const data = querystring.stringify({ key: key })

module.exports = {
  siteMetadata: {
    siteUrl: config.url || "",
    title: config.title || "",
    alternate: config.alternate || "",
    description: config.description || "",
    logo: config.logo || "",
    favicon: config.favicon || "",
    navbar: config.navbar || [],
    social: config.social || []
  },
  plugins: [
    {
      resolve: 'gatsby-source-apiserver',
      options: {
        typePrefix: '',
        url: url,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data,
        name: 'Ranks',
        schemaType: {
          alternative_id: 0,
          name: 'String',
          roster: 'String',
          captain: 1,
          mmr: 1,
          uncertainty: 1
        },
  
        localSave: true,
        path: `${__dirname}/static/data/`,

        // verboseOutput: true, // For debugging purposes
      }
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: config.favicon,
        // WebApp Manifest Configuration
        appName: config.alternate,
        appDescription: config.description,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#52267D',
        theme_color: '#7335b0',
        display: 'browser',
        orientation: 'any',
        start_url: '/',
        version: '1.0',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-107122749-3",
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: [ "/admin/**" ],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/data`,
        name: 'data'
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-responsive-iframe'
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}

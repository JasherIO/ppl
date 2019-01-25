const querystring = require('querystring')
const config = require('./static/data/site/config.json')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const credentials = {
  "type": "service_account",
  "project_id": process.env.GS_PROJECT_ID,
  "private_key_id": process.env.GS_PRIVATE_KEY_ID,
  "private_key": process.env.GS_PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
  "client_email": process.env.GS_CLIENT_EMAIL,
  "client_id": process.env.GS_CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": process.env.GS_CLIENT_X509_CERT_URL
}

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
        url: process.env.API_RANKS_URL,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: querystring.stringify({ key: process.env.API_RANKS_KEY }),
        name: 'Rank',
        schemaType: {
          alternative_id: 0,
          name: 'String',
          roster: 'String',
          captain: 1,
          mmr: 1,
          uncertainty: 1
        },
  
        // localSave: true,
        // path: `${__dirname}/static/data/`,

        // verboseOutput: true, // For debugging purposes
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1pF2ojqeMb9dzD98gtlKbJKtvisXcOYczZpHJLWN6voY',
          worksheetTitle: 'Leaderboard 2.0',
          credentials: credentials
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

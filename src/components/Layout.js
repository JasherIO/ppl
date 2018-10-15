import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

library.add(fab)

const PureLayout = ({ children, data }) => (
  <div>
    {/* https://github.com/gatsbyjs/gatsby/blob/445f5ff7508ab613967e18b32490e3feffd7730c/www/src/components/layout.js */}
    <Helmet defaultTitle={`${data.site.siteMetadata.title}`} titleTemplate={`%s | ${data.site.siteMetadata.alternate}`}>
      <html lang="en" />
      
      <meta name="og:type" content="website" />
      
      <meta name="og:title" content={data.site.siteMetadata.title} />
      
      <meta name="og:site_name" content={data.site.siteMetadata.title} />
      <meta name="twitter:site" content="@pulsarpremier" />

      <meta name="og:description" content={data.site.siteMetadata.description} />
      <meta name="description" content={data.site.siteMetadata.description} />
      
      {/* TODO */}
      {/* <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}${location.pathname}` /> */}
    </Helmet>

    <Navbar />
    {children}
    <Footer />
  </div>
)

const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        alternate
        description
        social {
          twitter
        }
      }
    }
  }
`

export const Layout = props => (
  <StaticQuery query={query} render={data => <PureLayout data={data} {...props} />} />
)

export default Layout
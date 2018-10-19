import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import posed, { PoseGroup } from 'react-pose'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

const transitionDuration = 300
const transitionDelay = 350
const pageFade = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: transitionDuration },
    delay: transitionDelay,
    beforeChildren: true,
  },
  exit: {
    opacity: 0,
    transition: { duration: transitionDuration },
  },
}
const Transition = posed.div(pageFade)

library.add(fab)

const NoScript = () => (
  <noscript>
    <style
      dangerouslySetInnerHTML={{
        __html: `
          #content {
            visibility: visible !important;
          }
          #nav {
            opacity: 1 !important;
            transform: translateY(0px) !important;
          }
    `,
      }}
    />
  </noscript>
)

class PureLayout extends React.Component {
  constructor() {
    super()
    this.state = { loaded: false }
  }

  componentDidMount() {
    this.setState({ loaded: true })
  }

  render() {

    const { children, location, site } = this.props
    const { loaded } = this.state

    return (
      <div className={`${loaded ? ' loaded' : 'initial'}`}>
        {/* https://github.com/gatsbyjs/gatsby/blob/445f5ff7508ab613967e18b32490e3feffd7730c/www/src/components/layout.js */}
        <Helmet defaultTitle={`${site.siteMetadata.title}`} titleTemplate={`%s | ${site.siteMetadata.alternate}`}>
          <html lang="en" />
          
          <meta name="og:type" content="website" />
          
          <meta name="og:title" content={site.siteMetadata.title} />
          
          <meta name="og:site_name" content={site.siteMetadata.title} />
          {/* TODO: Pull twitter link from site metadata */}
          <meta name="twitter:site" content="@pulsarpremier" />

          <meta name="og:description" content={site.siteMetadata.description} />
          <meta name="description" content={site.siteMetadata.description} />
          
          {/* TODO: Canonical links */}

          <meta name="msvalidate.01" content="1F070B704B750BDCFF3AA23B0EF3D993" />
        </Helmet>

        <PoseGroup animateOnMount preEnterPose="initial">
          <Transition key={location.pathname} id="content">
            <Navbar />
            {children}
            <Footer />
            <NoScript />
          </Transition>
        </PoseGroup>
      </div>
    )
  }
}

const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        alternate
        description
      }
    }
  }
`

export const Layout = props => (
  <StaticQuery query={query} render={({site}) => <PureLayout site={site} {...props} />} />
)

export default Layout

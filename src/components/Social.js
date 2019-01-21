/* eslint-disable */

import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import _ from 'lodash'

export const PureSocial = ({ data, ...props }) => (
  <div className="field is-grouped is-grouped-centered" {...props}>
    {_.map(data.site.siteMetadata.social, item => {
      return (
        <p className="control">
          <OutboundLink href={item.link} key={`${item.platform}`} aria-label={_.lowerCase(item.platform)} rel='external'>
            <span className="icon is-large">
              <FontAwesomeIcon icon={['fab', _.toLower(item.platform)]} size="2x" />
            </span>
          </OutboundLink>
        </p>
      )
    })}
  </div>
)

const query = graphql`
  query {
    site {
      siteMetadata {
        social {
          platform
          link
        }
      }
    }
  }
`

export const Social = props => (
  <StaticQuery query={query} render={data => <PureSocial data={data} {...props} />} />
)

export default Social

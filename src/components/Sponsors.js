import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import _ from 'lodash'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export const Level = ({ sponsors }) => (
  <div className="level is-mobile">
    <div className="level-item">
      <p className="title is-4">Sponsored By</p>
    </div>
    <div className="level-item">
      {_.map(sponsors, (sponsor) => (
          <div key={sponsor.name} style={{ padding: "0.5rem" }}>
            <figure className="image is-96x96 is-hidden-touch">
              <OutboundLink href={sponsor.link} aria-label={sponsor.name}>
                <Img fluid={sponsor.img.childImageSharp.fluid} />
              </OutboundLink>
            </figure>
            <figure className="image is-48x48 is-hidden-desktop">
              <OutboundLink href={sponsor.link} aria-label={sponsor.name}>
                <Img fluid={sponsor.img.childImageSharp.fluid} />
              </OutboundLink>
            </figure>
          </div>
        )
      )}
    </div>
  </div>
)

export const PureSection = ({ data }) => {
  const { sponsors } = data.markdownRemark.frontmatter

  return (
    <section className="section is-small">
      <div className="container">
        <Level sponsors={sponsors} />
      </div>
    </section>
  )
}

const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "home-post" } }) {
      frontmatter {
        sponsors {
          name
          img {
            childImageSharp {
              fluid(maxWidth: 96, maxHeight: 96) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          link
        }
      }
    }
  }
`

export const Section = props => (
  <StaticQuery query={query} render={data => <PureSection data={data} {...props} />} />
)

export default Section
import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export const Level = ({ sponsors }) => (
  <div className="level is-mobile">
    <div className="level-left">
      <div className="level-item">
        <p className="title is-4">Sponsored By</p>
      </div>
    </div>
    <div className="level-right">
      {sponsors.map((sponsor) => (
          <div key={sponsor.name} className="level-item">
            <figure className="image is-96x96 is-hidden-touch">
              <OutboundLink href={sponsor.link}>
                <img src={sponsor.img} alt={sponsor.name} />
              </OutboundLink>
            </figure>
            <figure className="image is-48x48 is-hidden-desktop">
              <OutboundLink href={sponsor.link}>
                <img src={sponsor.img} alt={sponsor.name} />
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
    <section className="section is-small background is-hexellence">
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
          img
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
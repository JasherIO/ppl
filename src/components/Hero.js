import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

export const backgroundImage = (img) => {
  return `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`
}

export const PureSection = ({ data }) => {
  const { hero } = data.markdownRemark.frontmatter
  
  return (
    <section className="hero is-primary is-medium hero-background" style={{ backgroundImage: backgroundImage(hero.img) }}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            {hero.title}
          </h1>
          <h2 className="subtitle">
            {hero.subtitle}
          </h2>
        </div>
      </div>
    </section>
  )
}

const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "home-post" } }) {
      frontmatter {
        hero {
          title
          subtitle
          img
        }
      }
    }
  }
`

export const Section = props => (
  <StaticQuery query={query} render={data => <PureSection data={data} {...props} />} />
)

export default Section
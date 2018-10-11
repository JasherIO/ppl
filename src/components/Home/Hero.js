import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const backgroundImage = (img) => {
  return `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`
}

const Section = ({ data }) => {
  const { hero } = data.markdownRemark.frontmatter
  
  return (
    <section className="hero is-primary is-medium hero-background" style={{ backgroundImage: backgroundImage(hero.img) }}>
      <div className="hero-body">
        <div className="container">
          <div className="title">
            {hero.title}
          </div>
          <div className="subtitle">
            {hero.subtitle}
          </div>
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

export default props => (
  <StaticQuery query={query} render={data => <Section data={data} {...props} />} />
)
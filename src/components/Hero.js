import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export const PureSection = ({ data }) => {
  const hero = data.markdownRemark

  return (
    <div className="section container gradient" style={{ 
      padding: 0
    }}>
      <Link to={hero.fields.slug}>
        <figure className="image">
          <Img fluid={hero.frontmatter.cover.childImageSharp.fluid} style={{borderRadius: "10px"}} />
        </figure>
      </Link>

      <div className="content" style={{
        position: "absolute",
        bottom: "0",
        left: "1rem"
      }}>
        <h1 className="title is-2 has-text-white">{hero.frontmatter.title}</h1>
      </div>
    </div>
  )
}

const query = graphql`
  query {
    markdownRemark(frontmatter: {templateKey: {in: ["post"]}, feature: {eq: true}}) {
      fields {
        slug
      }
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export const Section = props => (
  <StaticQuery query={query} render={data => <PureSection data={data} {...props} />} />
)

export default Section
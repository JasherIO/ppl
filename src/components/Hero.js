import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export const PureHero = (props) => {
  const { data } = props

  const hero = data.allMarkdownRemark.edges[0].node

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

PureHero.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            fields: PropTypes.shape({
              slug: PropTypes.string
            }),
            frontmatter: PropTypes.shape({
              title: PropTypes.string,
              cover: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.object,
              ]),
            })
          })
        })
      ),
    }),
  }),
}

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: {templateKey: {eq: "post"}, feature: {eq: true}} }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            cover {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export const Hero = props => (
  <StaticQuery query={query} render={data => <PureHero data={data} {...props} />} />
)

export default Hero
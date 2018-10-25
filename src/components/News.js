import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Cards from './News-Cards'

export const Title = () => (
  <div className="level is-mobile">
    <div className="level-left">
      <div className="level-item">
        <p className="title is-4">Recent News</p>
      </div>
    </div>
    <div className="level-right">
      <div className="level-item">
        <Link to="/news" className="button is-primary is-outlined">
          View All News
        </Link>
      </div>
    </div>
  </div>
)

export const PureSection = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <section className="section background is-hexellence" style={{ paddingBottom: "5rem" }}>
      <div className="container">
        <Title />

        <Cards posts={posts} />
      </div>
    </section>
  )
}

const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "post" } }}
      limit: 3
    ) {
      edges {
        node {
          id
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
            category
            date
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

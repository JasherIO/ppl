import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import _ from 'lodash'

export const Level = () => (
  <div className="level is-mobile" style={{ marginBottom: "0.5rem" }}>
    <div className="level-left">
      <div className="level-item">
        <p className="title is-4">Recent News</p>
      </div>
    </div>
    <div className="level-right">
      <div className="level-item">
        <Link to="/news" className="button is-primary is-outlined is-rounded is-small">
          View All News
        </Link>
      </div>
    </div>
  </div>
)

export const List = ({ posts }) => {
  return (
    <ul>
      {_.map(posts, ({ node: post }) => (
        <li key={post.id}>
          <Link to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export const PureSection = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const [column1Posts, column2Posts] = _.chunk(posts, 5)

  return (
    <div className="section container">
      <Level />
    
      <div className="columns content">
        <div className="column" style={{ padding: "0.25rem", paddingBottom: "0.75rem"}}>
          <List posts={column1Posts} />
        </div>
        <div className="column" style={{ padding: "0.25rem", paddingBottom: "0.75rem"}}>
          <List posts={column2Posts} />
        </div>
      </div>

    </div>
  )
}

// TODO: Remove featured post
const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: {eq: "post"}, feature: {ne: true} }}
      limit: 10
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

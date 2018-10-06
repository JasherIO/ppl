import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Card from '../News/Card'

const Title = () => (
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

const Section = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <section className="section bg-hexellence">
      <div className="container">
        <Title />

        <div className="columns">
          {posts.map(({ node: post }) => { 
            return (
              <div className="column is-one-third" key={post.id}>
                <Card post={post} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
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
            cover
            category
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery query={query} render={data => <Section data={data} {...props} />} />
)

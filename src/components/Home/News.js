import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import moment from 'moment'

const Level = () => (
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

const Card = ({ node: post }) => (
  <div className="column" key={post.id}>
    <div className="card">
      <div className="card-image">
        <figure className="image is-16by9">
          <Link to={post.fields.slug}>
            <img src={post.frontmatter.cover} alt={post.frontmatter.title} />
          </Link>
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <div className="title is-4">
            <Link to={post.fields.slug}>
              {post.frontmatter.title}
            </Link>
          </div>
          <div className="subtitle is-6">
            <div className="level is-mobile">
              <div className="level-left">
                <div className="level-item">
                  <span className="has-text-dark is-uppercase has-text-weight-bold">{post.frontmatter.category}</span>
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <time dateTime={post.frontmatter.date} className="has-text-weight-light">{moment(post.frontmatter.date).fromNow()}</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Section = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <section className="section">
      <div className="container">
        <Level />

        <div className="columns">
          {posts.map(Card)}
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

import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import _ from 'lodash'
import Section, { Level } from './Section'

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

export const PureNews = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const [column1Posts, column2Posts] = _.chunk(posts, 5)

  return (
    <Section>
      <Level title="Recent News" size="4">
        <Link to="/news" className="button is-primary is-outlined is-rounded is-small">
          View All News
        </Link>
      </Level>
    
      <div className="columns content">
        <div className="column" style={{ padding: "0.25rem", paddingBottom: "0.75rem"}}>
          <List posts={column1Posts} />
        </div>
        <div className="column" style={{ padding: "0.25rem", paddingBottom: "0.75rem"}}>
          <List posts={column2Posts} />
        </div>
      </div>

    </Section>
  )
}

PureNews.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            fields: PropTypes.shape({
              slug: PropTypes.string
            }),
            frontmatter: PropTypes.shape({
              title: PropTypes.string,
              cover: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.object,
              ]),
              category: PropTypes.string,
              date: PropTypes.string
            })
          }),
        })
      ),
    }),
  }),
}

const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: {eq: "post"} }}
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

export const News = props => (
  <StaticQuery query={query} render={data => <PureNews data={data} {...props} />} />
)

export default News

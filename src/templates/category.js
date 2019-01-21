import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Tiles from '../components/Posts/Tiles'

export default class CategoryPage extends React.Component {
  render() {
    const { data, location, pageContext } = this.props
    const { edges: posts } = data.posts
    const { category } = pageContext

    return <Tiles posts={posts} title={category} path={location.pathname} />
  }
}

CategoryPage.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            excerpt: PropTypes.string,
            timeToRead: PropTypes.number,
            fields: PropTypes.shape({
              slug: PropTypes.string
            }),
            frontmatter: PropTypes.shape({
              templateKey: PropTypes.string,
              cover: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.object,
              ]),
              title: PropTypes.string,
              description: PropTypes.string,
              category: PropTypes.string,
              date: PropTypes.string
            })
          }),
        })
      ),
    }),
  }),
}

export const pageQuery = graphql`
  query CategoryQuery($category: String) {
    posts: allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { in: ["post"] }, category: { in: [$category] } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 175)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            templateKey
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


import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Tiles from '../../components/Post/Tiles'

export default class NewsPage extends React.Component {
  render() {
    const { data, location } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return <Tiles posts={posts} title={"News"} path={location.pathname} />
  }
}

NewsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
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
              title: PropTypes.string,
              description: PropTypes.string,
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

export const pageQuery = graphql`
  query NewsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 175)
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

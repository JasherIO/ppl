import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Tiles from '../../components/Posts/Tiles'

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
      edges: PropTypes.array,
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

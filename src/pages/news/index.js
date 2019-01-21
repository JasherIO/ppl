import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Cards from '../../components/News-Cards'

const Level = () => (
  <div className="level is-mobile">
    <div className="level-left">
      <div className="level-item">
        <h1 className="title is-3">Recent News</h1>
      </div>
    </div>

    <div className="level-right">
      <div className="level-item">
        <div className="select">
          <select>
            <option>All</option>
            <option>News</option>
            <option>Review</option>
          </select>
        </div>
      </div>
    </div>
  </div>
)

export default class NewsPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <>
        <Helmet>
          <title>News</title>
        </Helmet>
        <div className="section container">
          <Level />

          <Cards posts={posts} />
        </div>
      </>
    )
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
          excerpt(pruneLength: 400)
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

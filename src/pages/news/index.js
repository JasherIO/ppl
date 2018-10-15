import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Card from '../../components/News/Card'

const Title = () => (
  <div className="level is-mobile">
    <div className="level-left">
      <div className="level-item">
        <h1 className="title is-3">Recent News</h1>
      </div>
    </div>
    {/* <div className="level-right">
      <div className="level-item">
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Category</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="select is-primary">
                <select>
                  <option>News</option>
                  <option>Review</option>
                  <option>Video</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </div>
)

export default class NewsPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Helmet>
          <title>News</title>
        </Helmet>
        <div className="container">
          <section className="section">

            <Title />

            <div className="columns is-multiline">
              {posts.map(({ node: post }) => { 
                return (
                  <div className="column is-one-third" key={post.id}>
                    <Card post={post} />
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </Layout>
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
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
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
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

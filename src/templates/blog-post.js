import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  cover,
  title,
  tags,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <figure className="image">
              <img src={cover} style={{ boxShadow: '1px 1px 3px 0px rgba(0,0,0,0.75)'}} alt={title} />
            </figure>
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  cover: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout helmet={post.frontmatter.title}>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        cover={post.frontmatter.cover}
        title={post.frontmatter.title}
        tags={post.frontmatter.tags}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        cover
        title
        tags
      }
    }
  }
`

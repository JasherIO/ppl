import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import _ from 'lodash'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  excerpt,
  timeToRead,
  cover,
  title,
  tags,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      
      {/* Card Validator: https://cards-dev.twitter.com/validator */}
      {/* https://github.com/gatsbyjs/gatsby/blob/445f5ff7508ab613967e18b32490e3feffd7730c/www/src/templates/template-blog-post.js */}
      <Helmet>
        <meta name="og:type" content="article" />

        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        
        <meta name="description" content={excerpt}/>
        <meta name="og:description" content={excerpt} />
        <meta name="twitter:description" content={excerpt} />

        {cover && !_.isString(cover) && <meta name="og:image" content={`https://pulsarpremierleague.com${cover.childImageSharp.fluid.src}`} />}
        {cover && !_.isString(cover) && <meta name="twitter:image" content={`https://pulsarpremierleague.com${cover.childImageSharp.fluid.src}`} />}

        {/* TODO: authors */}
        {/* <link rel="author" href={`https://pulsarpremierleague.com${post.frontmatter.author.fields.slug}`} /> */}
        {/* <meta name="og:type" content="article" /> */}
        {/* <meta name="article:author" content={post.frontmatter.author.id} /> */}
        {/* <meta name="twitter:creator" content={post.frontmatter.author.twitter} /> */}
        {/* <meta name="author" content={post.frontmatter.author.id} /> */}

        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content={`${timeToRead} min read`} />

        {/* TODO: canonical link */}
      </Helmet>

      <div className="container content" id="post">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <figure className="image">
              {cover && !_.isString(cover) ? (
                <Img fluid={cover.childImageSharp.fluid} alt={title} style={{ overflow: "visible" }} />
              ) : (
                <img src={cover} alt={title} />
              )}
              
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
  // cover: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        excerpt={post.excerpt}
        timeToRead={post.timeToRead}
        cover={post.frontmatter.cover}
        title={post.frontmatter.title}
        tags={post.frontmatter.tags}
      />
    </>
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
      excerpt
      timeToRead
      frontmatter {
        date
        cover {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
        tags
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import { kebabCase } from 'lodash'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import _ from 'lodash'
import Content, { HTMLContent } from '../components/Content'

export const PostTemplate = ({
  content,
  contentComponent,
  excerpt,
  timeToRead,
  cover,
  title,
  keywords,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section container content">
      
      {/* Card Validator: https://cards-dev.twitter.com/validator */}
      {/* https://github.com/gatsbyjs/gatsby/blob/445f5ff7508ab613967e18b32490e3feffd7730c/www/src/templates/template-post.js */}
      <Helmet>
        <meta name="og:type" content="article" />

        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        
        <meta name="description" content={`${excerpt} ${keywords.join(' ')}`}/>
        <meta name="og:description" content={`${excerpt} ${keywords.join(' ')}`} />
        <meta name="twitter:description" content={`${excerpt} ${keywords.join(' ')}`} />

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

      <figure className="image" style={{ margin: 0 }}>
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

    </section>
  )
}

PostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  // cover: PropTypes.string,
  title: PropTypes.string,
  keywords: PropTypes.array,
}

const Post = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <>
      <PostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        excerpt={post.excerpt}
        timeToRead={post.timeToRead}
        cover={post.frontmatter.cover}
        title={post.frontmatter.title}
        keywords={post.frontmatter.keywords}
      />
    </>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Post

export const pageQuery = graphql`
  query PostByID($id: String!) {
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
        keywords
      }
    }
  }
`

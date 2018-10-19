import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'

export const PageTemplate = ({
  content,
  excerpt,
  title,
}) => (
  <section className="section">
    <Helmet>
      <meta name="og:type" content="website" />

      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      
      <meta name="description" content={excerpt}/>
      <meta name="og:description" content={excerpt} />
      <meta name="twitter:description" content={excerpt} />
    </Helmet>

    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            {title}
          </h1>
          <HTMLContent content={content} />
        </div>
      </div>
    </div>
  </section>
)

PageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const Page = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <>
      <PageTemplate
        content={page.html}
        excerpt={page.excerpt}
        title={page.frontmatter.title}
      />
    </>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Page

export const pageQuery = graphql`
  query PageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt
      timeToRead
      frontmatter {
        title
      }
    }
  }
`

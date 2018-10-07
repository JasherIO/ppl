import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor, widgetsFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    cover={entry.getIn(['data', 'cover'])}
    title={entry.getIn(['data', 'title'])}
    tags={entry.getIn(['data', 'tags']).toArray()}
  />
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview

import React from 'react'
import PropTypes from 'prop-types'
import { PostTemplate } from '../../templates/post'

const PostPreview = ({ entry, widgetFor }) => (
  <PostTemplate
    content={widgetFor('body')}
    cover={entry.getIn(['data', 'cover'])}
    title={entry.getIn(['data', 'title'])}
    tags={entry.getIn(['data', 'tags'])}
  />
)

PostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PostPreview

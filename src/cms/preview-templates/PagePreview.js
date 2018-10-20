import React from 'react'
import PropTypes from 'prop-types'
import { PageTemplate } from '../../templates/page'

const PostPreview = ({ entry, widgetFor }) => (
  <PageTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
  />
)

PostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PostPreview

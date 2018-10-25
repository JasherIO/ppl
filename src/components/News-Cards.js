import React from 'react'
import _ from 'lodash'
import Card from './News-Card'

const List = ({ posts }) => (
  <div className="columns is-multiline">
    {_.map(posts, ({ node: post }) => (
        <div className="column is-one-third" key={post.id}>
          <Card post={post} />
        </div>
      )
    )}
  </div>
)

export default List
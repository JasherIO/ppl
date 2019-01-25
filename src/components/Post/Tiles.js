import React from 'react'
import Helmet from 'react-helmet'
import _ from 'lodash'
import Tile from './Tile'
import Select from '../Category/Select'
import Section, { Level } from '../Section'

const Tiles = ({ posts, title, path }) => {
  const lastIndex = posts.length-1

  return (
    <>
      <Helmet title={title} />
      <Section>
        <Level title={title}>
          <Select path={path} />
        </Level>

        {_.map(posts, ({ node: post }, index) => (
          <div key={post.id}>
            <Tile post={post} />
            {index !== lastIndex && <hr style={{ marginTop: "0.75rem" }} />}
          </div>
        ))}
      </Section>
    </>
  )
}

export default Tiles
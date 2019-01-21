import React from 'react'
import Helmet from 'react-helmet'
import _ from 'lodash'
import Title from './Title'
import Tile from './Tile'

const Section = ({ posts, title, path }) => {
  const lastIndex = posts.length-1

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="section container" style={{paddingBottom: "1rem"}}>
        <Title title={title} path={path} />

        {_.map(posts, ({ node: post }, index) => (
          <>
            <Tile post={post} key={post.id}/>
            {index !== lastIndex && <hr />}
          </>
        ))}
      </div>
    </>
  )
}

export default Section
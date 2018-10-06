import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'

const Card = ({ post }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-16by9">
        <Link to={post.fields.slug}>
          <img src={post.frontmatter.cover} alt={post.frontmatter.title} />
        </Link>
      </figure>
    </div>
    <div className="card-content">

      <div className="content">
        <div className="title is-4">
          <Link to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
        </div>
        <div className="subtitle is-6">
          <div className="level is-mobile">
            <div className="level-left">
              <div className="level-item">
                <span className="has-text-dark is-uppercase has-text-weight-bold">{post.frontmatter.category}</span>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <time dateTime={post.frontmatter.date} className="has-text-weight-light">{moment(post.frontmatter.date).fromNow()}</time>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
)

export default Card
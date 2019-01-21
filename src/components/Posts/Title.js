import React from 'react'
import { navigate } from '@reach/router'
import _ from 'lodash'

const Title = ({ title, path }) => (
  <div className="level is-mobile">
    <div className="level-left">
      <div className="level-item">
        <h1 className="title is-3">Recent {_.endsWith(title, 's') ? title : `${title}s`}</h1>
      </div>
    </div>

    <div className="level-right">
      <div className="level-item">
        <div className="select">
          <select onChange={(event) => navigate(`${event.target.value}`)} value={path}>
            <option value="/news">All</option>
            <option value="/news/categories/announcement">Announcement</option>
            <option value="/news/categories/review">Review</option>
          </select>
        </div>
      </div>
    </div>
  </div>
)

export default Title
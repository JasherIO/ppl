import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { navigate } from '@reach/router'
import _ from 'lodash'

const PureTitle = ({ data, title, path }) => {
  const categories = _.filter(data.allMarkdownRemark.group, (x) => x['fieldValue'] !== 'undefined')

  return (
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
              {_.map(categories, category => <option value={`/news/categories/${_.lowerCase(category.fieldValue)}`}>{category.fieldValue}</option>)}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

const query = graphql`
  query {
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`

export const Title = props => (
  <StaticQuery query={query} render={data => <PureTitle data={data} {...props} />} />
)

export default Title
import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { navigate } from '@reach/router'
import _ from 'lodash'

const PureSelect = ({ data, path }) => {
  const categories = _.filter(data.allMarkdownRemark.group, (x) => x['fieldValue'] !== 'undefined')

  return (
    <div className="select">
      <select onChange={(event) => navigate(`${event.target.value}`)} value={path}>
        <option value="/news">All</option>
        {_.map(categories, category => <option key={category.fieldValue} value={`/news/categories/${_.lowerCase(category.fieldValue)}`}>{category.fieldValue}</option>)}
      </select>
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

export const Select = props => (
  <StaticQuery query={query} render={data => <PureSelect data={data} {...props} />} />
)

export default Select
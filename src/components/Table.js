/* stylelint-disable */

import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

// Headers Structure
// const headers = [
//   {
//     'key': 'gameWins',
//     'title': 'Game Wins',
//     'shortTitle': 'GW',
//     'isHiddenMobile': false
//   }
// ]

export const Headers = ({ headers }) => (
  <thead>
    <tr>
      {_.map(headers, header => (
        <th key={header.key} title={header.title} className={header.isHiddenMobile ? "is-hidden-mobile" : ""}>
          {header.shortTitle}
        </th>
      ))}
    </tr>
  </thead>
)

export const Row = ({ row, headers }) => (
  <tr>
    {_.map(headers, header => {
      if (!(header.key in row))
        return (<td></td>)

      const Render = header.render ? header.render : (props) => <>{props.children}</>

      return (
        <td key={`cell-${header.key}`} className={header.isHiddenMobile ? "is-hidden-mobile" : ""}>
          <Render row={row}>
            {row[header.key]}
          </Render>
        </td>
      )
    })}
  </tr>
)

export const Rows = ({ headers, rows }) => (
  <tbody>
    {_.map(rows, (row, index) => (
      <Row key={`row-${index}`} row={row} headers={headers} />
    ))}
  </tbody>
)

const Table = ({ headers, rows }) => (
  <table className="table is-striped is-fullwidth is-rounded">
    <Headers headers={headers} />
    <Rows headers={headers} rows={rows} />
  </table>
)

Table.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.string,
      shortTitle: PropTypes.string,
      isHiddenMobile: PropTypes.boolean
    })
  ),
  rows: PropTypes.array
}

export default Table

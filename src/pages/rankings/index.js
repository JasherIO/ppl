import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import _ from 'lodash'
import Table from '../../components/Table'

export const Level = () => (
  <div className="level is-mobile" style={{ marginBottom: "1rem" }}>
    <div className="level-left">
      <div className="level-item">
        <p className="title is-4">Rankings</p>
      </div>
    </div>
  </div>
)

const headers = [
  {
    'key': 'rank',
    'title': 'Rank',
    'shortTitle': 'Rank',
    'isHiddenMobile': false
  },
  {
    'key': 'name',
    'title': 'Name',
    'shortTitle': 'Name',
    'isHiddenMobile': false
  },
  {
    'key': 'mmr',
    'title': 'ELO',
    'shortTitle': 'ELO',
    'isHiddenMobile': false
  },
]

export default class RanksPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges } = data.allRanks

    const filtered = _.filter(_.map(edges, 'node'), (x) => x.alternative_id)
    const sorted = _.sortBy(filtered, ['mmr'])
    const ranks = _.map(sorted, (rank, index) => {
      const obj = { 'rank': index+1 }
      return { ...obj, ...rank }
    })

    return (
      <div className="section container">
        <Level />
        <Table headers={headers} rows={ranks} />
      </div>
    )
  }
}

RanksPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.shape({
        node: PropTypes.shape({
          alternative_id: PropTypes.number,
          name: PropTypes.string,
          roster: PropTypes.string,
          captain: PropTypes.number,
          mmr: PropTypes.number,
          uncertainty: PropTypes.number
        })
      }),
    }),
  }),
}

export const pageQuery = graphql`
  query {
    allRanks {
      edges {
        node {
          alternative_id
          name
          roster
          captain
          mmr
          uncertainty
        }
      }
    }
  }
`
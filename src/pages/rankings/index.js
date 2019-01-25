import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import _ from 'lodash'
import Table from '../../components/Table'
import Section, { Level } from '../../components/Section'

const render = (props) => {
  const { children, row } = props 

  return (
    <Link to={`/team/${row.alternative_id}`}>
      {children}
    </Link>
  )
}

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
    'isHiddenMobile': false,
    'render': render,
  },
  {
    'key': 'mmr',
    'title': 'ELO',
    'shortTitle': 'ELO',
    'isHiddenMobile': false
  },
]

export default class RankingsPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges } = data.allRank

    const rows = _.map(edges, 'node')

    return (
      <Section>
        <Helmet title="Rankings" />
        <Level title="Rankings" />
        <Table headers={headers} rows={rows} />
      </Section>
    )
  }
}

RankingsPage.propTypes = {
  data: PropTypes.shape({
    allRank: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            alternative_id: PropTypes.number,
            rank: PropTypes.number,
            name: PropTypes.string,
            roster: PropTypes.string,
            captain: PropTypes.number,
            mmr: PropTypes.number,
            uncertainty: PropTypes.number
          })
        })
      ),
    }),
  }),
}

export const pageQuery = graphql`
  query {
    allRank (
      filter: { alternative_id: {gt: 0} }
      sort: { fields: [rank, name] }
    ) {
      edges {
        node {
          id
          alternative_id
          rank
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
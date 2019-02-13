import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link, StaticQuery } from 'gatsby'
import _ from 'lodash'
import Table from '../Table'
import Section, { Level } from '../Section'

const headers = [
  {
    'key': 'rank',
    'title': 'Rank',
    'shortTitle': 'Rank',
    'isHiddenMobile': false
  },
  {
    'key': 'team',
    'title': 'Team',
    'shortTitle': 'Team',
    'isHiddenMobile': false
  },
  {
    'key': 'pts',
    'title': 'Points',
    'shortTitle': 'Points',
    'isHiddenMobile': false
  },
  {
    'key': 'gw',
    'title': 'Game Wins',
    'shortTitle': 'GW',
    'isHiddenMobile': true
  },
  {
    'key': 'gl',
    'title': 'Game Losses',
    'shortTitle': 'GL',
    'isHiddenMobile': true
  },
  {
    'key': 'gf',
    'title': 'Goals For',
    'shortTitle': 'GF',
    'isHiddenMobile': true
  },
  {
    'key': 'ga',
    'title': 'Goals Against',
    'shortTitle': 'GA',
    'isHiddenMobile': true
  },
]

const PureMini = (props) => {
  const { data } = props
  const { edges } = data.allGoogleSheetLeaderboard20Row

  const rows = _.map(edges, 'node')

  return (
    <Section>
      <Level title="Leaderboard" size="4">
        <Link to="/leaderboard" className="button is-primary is-outlined is-rounded is-small">
          View Full Leaderboard
        </Link>
      </Level>
      <Table headers={headers} rows={rows} />
    </Section>
  )
}

PureMini.propTypes = {
  data: PropTypes.shape({
    allGoogleSheetLeaderboard20Row: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            rank: PropTypes.number,
            team: PropTypes.string,
            season: PropTypes.number,
            tp: PropTypes.number,
            tw: PropTypes.number,
            sp: PropTypes.number,
            sl: PropTypes.number,
            gp: PropTypes.number,
            gw: PropTypes.number,
            gl: PropTypes.number,
            pts: PropTypes.number,
            gf: PropTypes.number,
            ga: PropTypes.number,
          })
        })
      ),
    }),
  }),
}

const query = graphql`
  query {
    allGoogleSheetLeaderboard20Row(
      limit: 10,
      sort: {fields: [rank, team]} 
    ) {
      edges {
        node {
          id
          rank
          team
          season
          tp
          tw
          sp
          sw
          sl
          gp
          gw
          gl
          pts
          gf
          ga
        }
      }
    }
  }
`

export const Mini = props => (
  <StaticQuery query={query} render={data => <PureMini data={data} {...props} />} />
)

export default Mini
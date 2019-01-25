import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import _ from 'lodash'
import Table from '../Table'

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
    'isHiddenMobile': false
  },
  {
    'key': 'gl',
    'title': 'Game Losses',
    'shortTitle': 'GL',
    'isHiddenMobile': false
  },
  {
    'key': 'gf',
    'title': 'Goals For',
    'shortTitle': 'GF',
    'isHiddenMobile': false
  },
  {
    'key': 'ga',
    'title': 'Goals Against',
    'shortTitle': 'GA',
    'isHiddenMobile': false
  },
]

const PureMini = (props) => {
  const { data } = props
  const { edges } = data.allGoogleSheetLeaderboard20Row

  const rows = _.map(edges, 'node')

  return <Table headers={headers} rows={rows} />
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
      sort: {fields: [rank, team]} 
    ) {
      edges {
        node {
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
import React from 'react'
import Table from '../Table'

export const Level = () => (
  <div className="level is-mobile" style={{ marginBottom: "1rem" }}>
    <div className="level-left">
      <div className="level-item">
        <p className="title is-4">Leaderboard</p>
      </div>
    </div>
    {/* <div className="level-right">
      <div className="level-item">
        <Link to="/leaderboard" className="button is-primary is-outlined is-rounded is-small">
          View Full Leaderboard
        </Link>
      </div>
    </div> */}
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
    'key': 'team',
    'title': 'Team',
    'shortTitle': 'Team',
    'isHiddenMobile': false
  },
  {
    'key': 'points',
    'title': 'Points',
    'shortTitle': 'Points',
    'isHiddenMobile': false
  },
  {
    'key': 'goalsFor',
    'title': 'Goals For',
    'shortTitle': 'GF',
    'isHiddenMobile': true
  },
  {
    'key': 'goalsAgainst',
    'title': 'Goals Against',
    'shortTitle': 'GA',
    'isHiddenMobile': true
  },
]

const rows = [
  {
    "rank": 1,
    "team": "Lone Wolves!",
    "points": 63,
    "goalsFor": 98,
    "goalsAgainst": 81
  },
  {
    "rank": 2,
    "team": "LOAF! Breadsports",
    "points": 50,
    "goalsFor": 117,
    "goalsAgainst": 129
  },
  {
    "rank": 3,
    "team": "Lights Out!",
    "points": 37,
    "goalsFor": 38,
    "goalsAgainst": 25
  },
  {
    "rank": 4,
    "team": "Upper 90 eSports",
    "points": 33,
    "goalsFor": 58,
    "goalsAgainst": 15
  },
  {
    "rank": 5,
    "team": "vVv Gaming",
    "points": 32,
    "goalsFor": 52,
    "goalsAgainst": 42
  },
  {
    "rank": 6,
    "team": "RBG Esports",
    "points": 32,
    "goalsFor": 52,
    "goalsAgainst": 26
  },
  {
    "rank": 7,
    "team": "yeeters",
    "points": 23,
    "goalsFor": 40,
    "goalsAgainst": 46
  },
  {
    "rank": 8,
    "team": "Sway White",
    "points": 21,
    "goalsFor": 23,
    "goalsAgainst": 11
  },
  {
    "rank": 9,
    "team": "Loaded Dudes",
    "points": 16,
    "goalsFor": 15,
    "goalsAgainst": 11
  },
  {
    "rank": 10,
    "team": "Misunderstood",
    "points": 16,
    "goalsFor": 34,
    "goalsAgainst": 36
  }
]

const Section = () => {
  return (
    <div className="section container">
      <Level />
      <Table headers={headers} rows={rows} />
    </div>
  )
}

export default Section
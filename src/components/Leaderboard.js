import React from 'react'
// import { Link } from 'gatsby'
import _ from 'lodash'

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

const leaderboard = [
  {
    "team": "Lone Wolves!",
    "points": 63,
    "goalsFor": 98,
    "goalsAgainst": 81
  },
  {
    "team": "LOAF! Breadsports",
    "points": 50,
    "goalsFor": 117,
    "goalsAgainst": 129
  },
  {
    "team": "Lights Out!",
    "points": 37,
    "goalsFor": 38,
    "goalsAgainst": 25
  },
  {
    "team": "Upper 90 eSports",
    "points": 33,
    "goalsFor": 58,
    "goalsAgainst": 15
  },
  {
    "team": "vVv Gaming",
    "points": 32,
    "goalsFor": 52,
    "goalsAgainst": 42
  },
  {
    "team": "RBG Esports",
    "points": 32,
    "goalsFor": 52,
    "goalsAgainst": 26
  },
  {
    "team": "yeeters",
    "points": 23,
    "goalsFor": 40,
    "goalsAgainst": 46
  },
  {
    "team": "Sway White",
    "points": 21,
    "goalsFor": 23,
    "goalsAgainst": 11
  },
  {
    "team": "Loaded Dudes",
    "points": 16,
    "goalsFor": 15,
    "goalsAgainst": 11
  },
  {
    "team": "Misunderstood",
    "points": 16,
    "goalsFor": 34,
    "goalsAgainst": 36
  }
]

export const Row = ({ data, rank }) => (
  <tr>
    <th>{rank}</th>
    <td>{data.team}</td>
    {/* <td>{data.matchWins}</td> */}
    {/* <td>{data.matchLosses}</td> */}
    {/* <td className="is-hidden-mobile">{data.gameWins}</td> */}
    {/* <td className="is-hidden-mobile">{data.gameLosses}</td> */}
    <td className="is-hidden-mobile">{data.goalsFor}</td>
    <td className="is-hidden-mobile">{data.goalsAgainst}</td>
    <td className="is-hidden-mobile">{data.goalsFor - data.goalsAgainst}</td>
  </tr>
)

export const Table = () => {
  return (
    <table className="table is-fullwidth">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Team</th>
          {/* <th title="Wins">W</th> */}
          {/* <th title="Losses">L</th> */}
          {/* <th title="Game Wins" className="is-hidden-mobile">GW</th> */}
          {/* <th title="Game Losses" className="is-hidden-mobile">GL</th> */}
          <th title="Goals For" className="is-hidden-mobile">GF</th>
          <th title="Goals Against" className="is-hidden-mobile">GA</th>
          <th title="Goal Difference" className="is-hidden-mobile">GD</th>
        </tr>
      </thead>
      <tbody>
        {_.map(leaderboard, (data, index) => <Row data={data} rank={index+1} key={data.team} />)}
      </tbody>
    </table>
  )
}

const Section = () => {
  return (
    <div className="section container">
      <Level />
      <Table />
    </div>
  )
}

export default Section
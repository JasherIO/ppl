import React from 'react'
import PropTypes from 'prop-types'

const Table = ({ data }) => (
  <table className="table is-striped is-fullwidth is-rounded">
    <thead>
      <tr>
        <th></th>
        <th>Team</th>
        <th title="Wins">W</th>
        <th title="Losses">L</th>
        <th title="Game Wins" className="is-hidden-mobile">GW</th>
        <th title="Game Losses" className="is-hidden-mobile">GL</th>
        <th title="Goals For" className="is-hidden-mobile">GF</th>
        <th title="Goals Against" className="is-hidden-mobile">GA</th>
        <th title="Goal Difference" className="is-hidden-mobile">GD</th>
      </tr>
    </thead>
    <tbody>
      {data
        .map((element, index) => (
          <Row element={element} index={index} key={element.id} />
        ))}
    </tbody>
  </table>
)

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      roster: PropTypes.string,
      gameWins: PropTypes.number,
      gameLosses: PropTypes.number,
      matchWins: PropTypes.number,
      matchLosses: PropTypes.number,
      score: PropTypes.number,
      goalsFor: PropTypes.number,
      assists: PropTypes.number,
      saves: PropTypes.number,
      shots: PropTypes.number,
      goalsAgainst: PropTypes.number,
      shotsAgainst: PropTypes.number,
      division: PropTypes.string,
    })
  ),
}

const Row = ({ element, index }) => (
  <tr>
    <th>{index + 1}</th>
    <td>{element.name}</td>
    <td>{element.matchWins}</td>
    <td>{element.matchLosses}</td>
    <td className="is-hidden-mobile">{element.gameWins}</td>
    <td className="is-hidden-mobile">{element.gameLosses}</td>
    <td className="is-hidden-mobile">{element.goalsFor}</td>
    <td className="is-hidden-mobile">{element.goalsAgainst}</td>
    <td className="is-hidden-mobile">{element.goalsFor - element.goalsAgainst}</td>
  </tr>
)

export default Table

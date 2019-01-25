import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import axios from 'axios'
import querystring from 'querystring'
import _ from 'lodash'
import Section, { Level } from '../components/Section'

import { setConfig } from 'react-hot-loader'

setConfig({ pureSFC: true })

const TeamPage = (props) => {
  const { data, pageContext } = props
  const rank = data.rank
  const { teamId } = pageContext

  const body = {
    'key': process.env.API_TEAMS_KEY,
    'id': teamId
  }
  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  }

  const [team, setTeam] = useState({})

  useEffect(() => {
    (async () => {
      const response = await axios.post(process.env.API_TEAMS_URL, querystring.stringify(body), options)
      setTeam(response.data)
    })()
  }, [])

  return (
    <Section>
      <Level title={rank.name} >
        <h1 className="subtitle is-5">#{rank.rank} ({rank.mmr})</h1>
      </Level>

      <h1 className="subtitle is-5" style={{ marginBottom: "0.75rem" }}>Roster</h1>

      <ul className="content">
        {_.map(team.players, player => (
          <li key={player}>{player}</li>
        ))}
      </ul>

    </Section>
  )
}

TeamPage.propTypes = {
  data: PropTypes.shape({
    rank: PropTypes.shape({
      id: PropTypes.string,
      alternative_id: PropTypes.number,
      rank: PropTypes.number,
      name: PropTypes.string,
      roster: PropTypes.string,
      captain: PropTypes.number,
      mmr: PropTypes.number,
      uncertainty: PropTypes.number,
    }),
  }),
}

export const pageQuery = graphql`
  query TeamQuery($teamId: Int) {
    rank(alternative_id: {eq: $teamId}) {
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
`

export default TeamPage

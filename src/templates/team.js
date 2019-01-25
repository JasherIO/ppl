// import React, { useState, useEffect } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// import axios from 'axios'
// import querystring from 'querystring'
import Section, { Level } from '../components/Section'

import { setConfig } from 'react-hot-loader'

setConfig({ pureSFC: true })

const TeamPage = (props) => {
  // const { data, pageContext } = props
  const { data } = props
  const rank = data.rank
  // const { teamId } = pageContext

  // const [team, setTeam] = useState({})

  // useEffect(() => {
  //   (async () => {
  //     const data = {
  //       'key': process.env.API_TEAMS_KEY,
  //       'id': teamId
  //     }
  //     const options = {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //       }
  //     }
  //     console.log(data, options, process.env.API_TEAMS_URL)

  //     const response = await axios.post(process.env.API_TEAMS_URL, querystring.stringify(data), options)
      
  //     setTeam(response.data)
  //   })()
  // }, [])

  // console.log(teamId, rank, team)

  return (
    <Section>
      <Level title={rank.name} >
        <h1 className="subtitle is-5">#{rank.rank} ({rank.mmr})</h1>
      </Level>

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

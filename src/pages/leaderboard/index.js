import React from 'react'
import Helmet from 'react-helmet'
import Section, { Title } from '../../components/Section'
import FullLeaderboard from '../../components/Leaderboard/Full'

const LeaderboardPage = () => {
  return (
    <Section>
      <Helmet title="Leaderboard" />
      <Title title="Leaderboard" style={{ marginBottom: 0 }}/>

      <p className="has-text-weight-light" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        The leaderboard showcases team statistics from our weekly tournaments.
      </p>

      <FullLeaderboard />
    </Section>
  )
}

export default LeaderboardPage

import React from 'react'
import Helmet from 'react-helmet'
import Section, { Title } from '../../components/Section'
import FullLeaderboard from '../../components/Leaderboard/Full'

const LeaderboardPage = () => {
  return (
    <Section>
      <Helmet title="Leaderboard" />
      <Title title="Leaderboard" />
      <FullLeaderboard />
    </Section>
  )
}

export default LeaderboardPage

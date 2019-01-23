import React from 'react'
import Helmet from 'react-helmet'
import Hero from '../components/Hero'
import News from '../components/News'
import Leaderboard from '../components/Leaderboard/Mini'


export default class IndexPage extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Home</title>
        </Helmet>

        <Hero />
        <News />
        <Leaderboard />
      </>
    )
  }
}

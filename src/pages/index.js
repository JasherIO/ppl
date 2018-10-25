import React from 'react'
import Helmet from 'react-helmet'
import Hero from '../components/Hero'
import News from '../components/News'
import About from '../components/About'
import Sponsors from '../components/Sponsors'

export default class IndexPage extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Home</title>
        </Helmet>

        <Hero />
        <News />
        <About />
        <Sponsors />
      </>
    )
  }
}

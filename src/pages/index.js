import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Hero from '../components/Home/Hero'
import News from '../components/Home/News'
import About from '../components/Home/About'
import Sponsors from '../components/Home/Sponsors'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Home</title>
        </Helmet>

        <Hero />
        <News />
        <About />
        <Sponsors />
      </Layout>
    )
  }
}

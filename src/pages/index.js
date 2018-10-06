import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Home/Hero'
import News from '../components/Home/News'
// import About from '../components/Home/About'
import Sponsors from '../components/Home/Sponsors'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout helmet="Home">
        <Hero />
        <News />
        {/* <About /> */}
        <Sponsors />
      </Layout>
    )
  }
}

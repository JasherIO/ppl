import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Home/Hero'
import News from '../components/Home/News'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout helmet="Home">
        <Hero />
        <News />
      </Layout>
    )
  }
}

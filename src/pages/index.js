import React from 'react'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout helmet="Home">
        <section className="hero is-primary is-medium has-bg-image">
          <div className="hero-body">
            <div className="container">
              <div className="title">
                Welcome to Pulsar Premier League!
              </div>
              <div className="subtitle">
                Seasonal leagues, statistics, and more...
              </div>
            </div>
          </div>
        </section>
        <section>

        </section>
      </Layout>
    )
  }
}

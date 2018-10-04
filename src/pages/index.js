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
        
        <section className="section">
          <div className="container">
            <div className="columns">

              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-16by9">
                      <img src="/img/Batmobile.jpg" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <p className="title is-4">Season 4: Week 1 In Review</p>
                      <p className="subtitle is-6">
                        <span className="has-text-primary is-uppercase has-text-weight-semibold">Review</span>
                        &nbsp;
                        <time datetime="2018-10-04" className="has-text-weight-light">a day ago</time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-16by9">
                      <img src="/img/XDevil.jpg" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <p className="title is-4">Week 1 Schedule Released</p>
                      <p className="subtitle is-6">
                        <span className="has-text-primary is-uppercase has-text-weight-semibold">News</span>
                        &nbsp;
                        <time datetime="2018-10-04" className="has-text-weight-light">6 days ago</time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-16by9">
                      <img src="/img/GrandChampion.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <p className="title is-4">Season 4 Kicks Off December 1st!</p>
                      <p className="subtitle is-6">
                        <span className="has-text-primary is-uppercase has-text-weight-semibold">News</span>
                        &nbsp;
                        <time datetime="2018-10-04" className="has-text-weight-light">09/26/2018</time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

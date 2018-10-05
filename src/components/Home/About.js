import React from 'react'
import { Link } from 'gatsby'

const Level = () => (
  <div className="level is-mobile">
    <div className="level-left">
      <div className="level-item">
        <p className="title is-4 is-hidden-touch">About Pulsar Premier League</p>
        <p className="title is-4 is-hidden-desktop">About PPL</p>
      </div>
    </div>
    <div className="level-right">
      <div className="level-item">
        <Link to="/about" className="button is-primary is-outlined">
          Read More
        </Link>
      </div>
    </div>
  </div>
)

const Tabs = () => (
  <div class="tabs">
    <ul>
      <li class="is-active"><a>Players</a></li>
      <li><a>Teams</a></li>
      <li><a>Format</a></li>
    </ul>
  </div>
)

const Section = () => {
  return (
    <section className="section">
      <div className="container">
        <Level />
        <Tabs />
      </div>
    </section>
  )
}

export default Section

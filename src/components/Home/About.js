/* eslint-disable */

import React from 'react'
import { Link } from 'gatsby'

const data = [
  {
    'title': 'Players',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, nisl quis porta bibendum, nulla purus vestibulum sem, sit amet ultrices nisi elit ut odio. Sed rutrum eu velit at rhoncus.'
  },
  {
    'title': 'Teams',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, nisl quis porta bibendum, nulla purus vestibulum sem, sit amet ultrices nisi elit ut odio. Sed rutrum eu velit at rhoncus.'
  },
  {
    'title': 'Format',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, nisl quis porta bibendum, nulla purus vestibulum sem, sit amet ultrices nisi elit ut odio. Sed rutrum eu velit at rhoncus.'
  }
]

const Title = () => (
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
    <section className="section is-medium">
      <div className="container">
        <Title />
        <Tabs />
      </div>
    </section>
  )
}

export default Section

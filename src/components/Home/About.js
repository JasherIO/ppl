/* eslint-disable */

import React from 'react'
import { Link } from 'gatsby'

const data = [
  {
    'name': 'Players',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, nisl quis porta bibendum, nulla purus vestibulum sem, sit amet ultrices nisi elit ut odio. Sed rutrum eu velit at rhoncus.'
  },
  {
    'name': 'Teams',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, nisl quis porta bibendum, nulla purus vestibulum sem, sit amet ultrices nisi elit ut odio. Sed rutrum eu velit at rhoncus.'
  },
  {
    'name': 'Format',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, nisl quis porta bibendum, nulla purus vestibulum sem, sit amet ultrices nisi elit ut odio. Sed rutrum eu velit at rhoncus.'
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

const Tab = ({ tab, active, onClick }) => (
  <li className={tab.name === active.name ? "is-active" : "false"} onClick={() => onClick(tab)}>
    <a>{tab.name}</a>
  </li>
)

const Tabs = ({ tabs, active, onClick }) => (
  <div className="tabs">
    <ul>
      {tabs.map(tab => <Tab key={tab.name} tab={tab} active={active} onClick={onClick} />)}
    </ul>
  </div>
)

class Section extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: data[0]
    }

    this.onClick = this.onClick.bind(this)
  }

  onClick(tab) {
    this.setState({ active: tab })
  }

  render() {
    return (
      <section className="section is-medium">
        <div className="container">
          <Title />
          <Tabs tabs={data} active={this.state.active} onClick={this.onClick} />

          <div>{this.state.active.content}</div>
        </div>
      </section>
    )
  }
}

export default Section

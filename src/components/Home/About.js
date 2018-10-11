/* eslint-disable */

import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const Title = () => (
  <div className="level is-mobile">
    <div className="level-left">
      <div className="level-item">
        <p className="title is-4 is-hidden-touch">About Pulsar Premier League</p>
        <p className="title is-4 is-hidden-desktop">About PPL</p>
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

    const { tabs } = props.data.markdownRemark.frontmatter

    this.state = {
      active: tabs[0],
      tabs: tabs
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
          <Tabs tabs={this.state.tabs} active={this.state.active} onClick={this.onClick} />

          <div>{this.state.active.description}</div>
        </div>
      </section>
    )
  }
}

const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "home-post" } }) {
      frontmatter {
        tabs {
          name
          description
        }
      }
    }
  }
`

export default props => (
  <StaticQuery query={query} render={data => <Section data={data} {...props} />} />
)

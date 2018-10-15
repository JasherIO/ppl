/* eslint-disable */

import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

export const Title = () => (
  <div className="level is-mobile">
    <div className="level-left">
      <div className="level-item">
        <p className="title is-4 is-hidden-touch">About Pulsar Premier League</p>
        <p className="title is-4 is-hidden-desktop">About PPL</p>
      </div>
    </div>
  </div>
)

export const Tab = ({ tab, active, onClick }) => (
  <li className={tab.name === active.name ? "is-active" : "false"} onClick={() => onClick(tab)}>
    <a>{tab.name}</a>
  </li>
)

export const Tabs = ({ tabs, active, onClick }) => (
  <div className="tabs">
    <ul>
      {tabs.map(tab => <Tab key={tab.name} tab={tab} active={active} onClick={onClick} />)}
    </ul>
  </div>
)

export class PureSection extends React.Component {
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
      <section className="section" style={{ padding: "6rem 1.5rem" }}>
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

export const Section =  props => (
  <StaticQuery query={query} render={data => <PureSection data={data} {...props} />} />
)

export default Section

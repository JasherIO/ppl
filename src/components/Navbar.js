/* eslint-disable */

import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import _ from 'lodash'

export class PureNavbar extends React.Component {
  constructor(props) { 
    super(props)
    
    this.state = { 
      isActive: false,
      site: props.data.site.siteMetadata,
      file: props.data.file
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({ isActive: !this.state.isActive})
  }

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation" id="nav">
        <div className="container is-fluid">
          
          <div className="navbar-brand">
            <Link to='/' className='navbar-item'>
              {/* <img src={this.state.site.logo} alt="Logo"></img> */}
              <Img fixed={this.state.file.childImageSharp.fixed} alt="Logo" />
            </Link>

            <a role="button" aria-label="menu" href="#" className={this.state.isActive ? "navbar-burger burger is-active" : "navbar-burger burger"} onClick={this.onClick}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-menu" className={this.state.isActive ? "navbar-menu is-active" : "navbar-menu"} onClick={this.onClick}>
            <div className="navbar-start">
              {this.state.site.navbar && !_.isEmpty(this.state.site.navbar) && 
                _.map(this.state.site.navbar, (item) => <Link key={item.label} to={item.link} className='navbar-item' activeClassName="is-active">{item.label}</Link>)}
            </div>
          </div>

        </div>
      </nav>
    )
  }
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        logo
        navbar {
          label
          link
        }
      }
    }
    file(relativePath: { eq: "purple-transparent.png" } ) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

export const Navbar = props => (
  <StaticQuery query={query} render={data => <PureNavbar data={data} {...props} />} />
)

export default Navbar

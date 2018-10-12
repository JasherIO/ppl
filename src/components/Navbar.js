/* eslint-disable */

import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Social = ({ social, device }) => (
  <>
    <OutboundLink href={social.discord} className={`navbar-item is-hidden-${device}`}  rel='external'>
      <FontAwesomeIcon icon={['fab', 'discord']} />
    </OutboundLink>

    <OutboundLink href={social.twitch} className={`navbar-item is-hidden-${device}`}  rel='external'>
      <FontAwesomeIcon icon={['fab', 'twitch']} />
    </OutboundLink>

    <OutboundLink href={social.twitter} className={`navbar-item is-hidden-${device}`}  rel='external'>
      <FontAwesomeIcon icon={['fab', 'twitter']} />
    </OutboundLink>
  </>
)

export class PureNavbar extends React.Component {
  constructor(props) { 
    super(props)
    
    this.state = { 
      isActive: false,
      site: props.data.site.siteMetadata
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({ isActive: !this.state.isActive})
  }

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="container is-fluid">
          
          <div className="navbar-brand">
            <Link to='/' className='navbar-item'>
              <img src={this.state.site.logo} alt="Logo"></img>
            </Link>

            <Social social={this.state.site.social} device='desktop' />

            <a role="button" href="#" className={this.state.isActive ? "navbar-burger burger is-active" : "navbar-burger burger"} onClick={this.onClick}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-menu" className={this.state.isActive ? "navbar-menu is-active" : "navbar-menu"} onClick={this.onClick}>

            <div className="navbar-start">
              <Link to="/news" className='navbar-item' activeClassName="is-active">
                News
              </Link>

              {/* <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/premier" className='navbar-link' activeClassName="is-active">
                  Premier
                </Link>
                <div className="navbar-dropdown is-boxed">
                  <Link to="/premier/standings" className='navbar-item' activeClassName="is-active">
                    Standings
                  </Link>
                  <Link to="/premier/stats" className='navbar-item' activeClassName="is-active">
                    Stats
                  </Link>
                </div>
              </div> */}
            </div>

            <div className="navbar-end">
              <Social social={this.state.site.social} device='touch' />
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
        social {
          discord
          twitch
          twitter
        }
      }
    }
  }
`

export const Navbar = props => (
  <StaticQuery query={query} render={data => <PureNavbar data={data} {...props} />} />
)

export default Navbar

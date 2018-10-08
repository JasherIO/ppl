/* eslint-disable */

import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Social = ({ device }) => (
  <>
    <a href='https://discord.gg/JT3wRE6' className={`navbar-item is-hidden-${device}`}  rel='external'>
      <FontAwesomeIcon icon={['fab', 'discord']} />
    </a>

    <a href='https://twitch.tv/pulsarpremierleague' className={`navbar-item is-hidden-${device}`}  rel='external'>
      <FontAwesomeIcon icon={['fab', 'twitch']} />
    </a>

    <a href='https://twitter.com/pulsarpremier' className={`navbar-item is-hidden-${device}`}  rel='external'>
      <FontAwesomeIcon icon={['fab', 'twitter']} />
    </a>
  </>
)

class Nav extends React.Component {
  constructor(props) { 
    super(props)
    
    this.state = { isActive: false }
    this.onClickNav = this.onClickNav.bind(this)
  }

  onClickNav() {
    this.setState({ isActive: !this.state.isActive})
  }

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="container is-fluid">
          
          <div className="navbar-brand">
            <Link to='/' className='navbar-item'>
              <img src="/img/purple-transparent.png" alt="Logo"></img>
            </Link>

            <Social device='desktop' />

            <a role="button" href="#" className={this.state.isActive ? "navbar-burger burger is-active" : "navbar-burger burger"} onClick={this.onClickNav}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-menu" className={this.state.isActive ? "navbar-menu is-active" : "navbar-menu"} onClick={this.onClickNav}>

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
              <Social device='touch' />
            </div>

          </div>

        </div>
      </nav>
    )
  }
}

export default Nav

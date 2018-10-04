import React from 'react'
import { Container,
         Navbar, 
         NavbarBrand,
         NavbarBurger,
         NavbarDropdown,
         NavbarEnd,
         NavbarItem,
         NavbarMenu,
         NavbarStart } from 'bloomer'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <Navbar isTransparent className=''>
        <Container isFluid>
          <NavbarBrand>
            <Link to='/' className='navbar-item'>
              <img src="/img/purple-transparent.png" alt="Logo"></img>
            </Link>

            <NavbarItem href='https://discord.gg/fV4VrQ4' isHidden='desktop'>
              <FontAwesomeIcon icon={['fab', 'discord']} />
            </NavbarItem>

            <NavbarItem href='https://twitch.tv/pulsarpremierleague' isHidden='desktop'>
              <FontAwesomeIcon icon={['fab', 'twitch']} />
            </NavbarItem>
            
            <NavbarItem href='https://twitter.com/pulsarpremier' isHidden='desktop'>
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </NavbarItem>

            <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
          </NavbarBrand>

          <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
            <NavbarStart>
              <Link to="/news" className='navbar-item' activeClassName="is-active">
                News
              </Link>
              
              <NavbarItem hasDropdown isHoverable>
                <Link to="/premier" className='navbar-link' activeClassName="is-active">
                  Premier
                </Link>
                <NavbarDropdown isBoxed>
                  <Link to="/premier/standings" className='navbar-item' activeClassName="is-active">
                    Standings
                  </Link>
                  <Link to="/premier/stats" className='navbar-item' activeClassName="is-active">
                    Stats
                  </Link>
                </NavbarDropdown>
              </NavbarItem>

            </NavbarStart>
            <NavbarEnd>
              <NavbarItem href='https://discord.gg/fV4VrQ4' isHidden='touch'>
                <FontAwesomeIcon icon={['fab', 'discord']} />
              </NavbarItem>

              <NavbarItem href='https://twitch.tv/pulsarpremierleague' isHidden='touch'>
                <FontAwesomeIcon icon={['fab', 'twitch']} />
              </NavbarItem>
              
              <NavbarItem href='https://twitter.com/pulsarpremierleague' isHidden='touch'>
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Container>
      </Navbar>
    )
  }
}

export default Nav

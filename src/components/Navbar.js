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
      <Navbar isTransparent className='is-dark'>
        <Container isFluid>
          <NavbarBrand>
            <Link to='/' className='navbar-item'>
              <img src="/img/white-transparent.png" alt="Logo"></img>
            </Link>
            

            {/* <NavbarItem hasDropdown isHoverable>
              <NavbarLink href='/division1'>Division 1</NavbarLink>
              <NavbarDropdown>
                <NavbarItem href='/division1/stats'>Stats</NavbarItem>
                <NavbarItem href='/division1/standings'>Standings</NavbarItem>
              </NavbarDropdown>
            </NavbarItem> */}

            {/* <NavbarItem hasDropdown isHoverable>
              <NavbarLink href='/division2'>Division 2</NavbarLink>
              <NavbarDropdown>
                <NavbarItem href='/division2/stats'>Stats</NavbarItem>
                <NavbarItem href='/division2/standings'>Standings</NavbarItem>
              </NavbarDropdown>
            </NavbarItem> */}

            <NavbarItem href='https://discord.gg/fV4VrQ4' isHidden='desktop'>
              <FontAwesomeIcon icon={['fab', 'discord']} />
            </NavbarItem>

            <NavbarItem href='https://twitch.tv/pulsarpremierleague' isHidden='desktop'>
              <FontAwesomeIcon icon={['fab', 'twitch']} />
            </NavbarItem>
            
            <NavbarItem href='https://twitter.com/pulsarpremierleague' isHidden='desktop'>
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
                {/* <NavbarLink href='/premier'>Premier</NavbarLink> */}
                <Link to="/premier" className='navbar-link' activeClassName="is-active">
                  Premier
                </Link>
                <NavbarDropdown isBoxed>
                  {/* <NavbarItem href='/premier/stats'>Stats</NavbarItem> */}
                  {/* <NavbarItem href='/premier/standings'>Standings</NavbarItem> */}
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

// const Nav = () => (
//   <Navbar isTransparent className='is-dark'>
//     <Container isFluid>
//       <NavbarBrand>
//         <Link to='/' className='navbar-item'>
//           <img src="/img/white-transparent.png" alt="Logo"></img>
//         </Link>
//         <Link to="/news" className='navbar-item' activeClassName="is-active">
//           News
//         </Link>
        
//         <NavbarItem hasDropdown isHoverable isHidden='touch'>
//           {/* <NavbarLink href='/premier'>Premier</NavbarLink> */}
//           <Link to="/premier" className='navbar-link' activeClassName="is-active">
//             Premier
//           </Link>
//           <NavbarDropdown isBoxed>
//             {/* <NavbarItem href='/premier/stats'>Stats</NavbarItem> */}
//             {/* <NavbarItem href='/premier/standings'>Standings</NavbarItem> */}
//             <Link to="/premier/standings" className='navbar-item' activeClassName="is-active">
//               Standings
//             </Link>
//             <Link to="/premier/stats" className='navbar-item' activeClassName="is-active">
//               Stats
//             </Link>
//           </NavbarDropdown>
//         </NavbarItem>

//         {/* <NavbarItem hasDropdown isHoverable>
//           <NavbarLink href='/division1'>Division 1</NavbarLink>
//           <NavbarDropdown>
//             <NavbarItem href='/division1/stats'>Stats</NavbarItem>
//             <NavbarItem href='/division1/standings'>Standings</NavbarItem>
//           </NavbarDropdown>
//         </NavbarItem> */}

//         {/* <NavbarItem hasDropdown isHoverable>
//           <NavbarLink href='/division2'>Division 2</NavbarLink>
//           <NavbarDropdown>
//             <NavbarItem href='/division2/stats'>Stats</NavbarItem>
//             <NavbarItem href='/division2/standings'>Standings</NavbarItem>
//           </NavbarDropdown>
//         </NavbarItem> */}

//         {/* <NavbarItem href='https://twitter.com/pulsarpremierleague'>
//           <FontAwesomeIcon icon={['fab', 'github']} />
//         </NavbarItem> */}
//         {/* <NavbarItem href='https://twitter.com/pulsarpremierleague'>
//           <FontAwesomeIcon icon={['fab', 'twitter']} />
//         </NavbarItem> */}

//         <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
//       </NavbarBrand>

//       <NavbarMenu isActive={this.state.isActive} onClick={this.onClick}>
//         <NavbarStart>
//           <NavbarItem href='#/'>Home</NavbarItem>
//         </NavbarStart>
//         <NavbarEnd>
//           <NavbarItem href='#/'>Home</NavbarItem>
//         </NavbarEnd>
//       </NavbarMenu>
//     </Container>
//   </Navbar>
// )

export default Nav

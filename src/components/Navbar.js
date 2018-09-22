import React from 'react'
import { Container,
         Navbar, 
         NavbarBrand,
         NavbarDropdown,
         NavbarItem } from 'bloomer'
import { Link } from 'gatsby'

const Nav = () => (
  <Navbar isTransparent className='is-dark'>
    <Container isFluid>
      <NavbarBrand>
        <Link to='/' className='navbar-item'>
          <img src="/img/white-transparent.png" alt="Logo"></img>
        </Link>
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

        {/* <NavbarItem href='https://twitter.com/pulsarpremierleague'>
          <FontAwesomeIcon icon={['fab', 'github']} />
        </NavbarItem> */}
        {/* <NavbarItem href='https://twitter.com/pulsarpremierleague'>
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </NavbarItem> */}
      </NavbarBrand>
    </Container>
  </Navbar>
)

export default Nav

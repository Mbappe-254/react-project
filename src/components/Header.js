import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap'
import { NavLink } from 'react-router-dom';
import IceCreamLogo from '../assets/img/logo.avif'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark color='primary' sticky='top' expand='md'>
      <NavbarBrand className='ms-5' href='/'>
        <img src={IceCreamLogo} alt='iceCream Logo' className='float-start' />
        <h1 className='mt-1'>Moraa Icecream</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className='ms-auto' navbar>
          <NavItem>
            <NavLink className='nav-link' to='/'>
              <i className='fa fa-home fa-lg' /> Our Flavors
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/directory'>
              <i className='fa fa-list fa-lg' /> Recipe
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/our story'>
              <i className='fa fa-info fa-lg' /> Our Story
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/where'>
              <i className='fa fa-address-card fa-lg' /> Where to Buy
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/contact'>
              <i className='fa fa-address-card fa-lg' /> Contact Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/contact'>
              <i className='fa fa-address-card fa-lg' />  sign Up for Newsletter
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
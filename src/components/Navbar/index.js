import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            บทที่ 1
          </NavLink>
          <NavLink to='/about' activeStyle>
            บทที่ 2
          </NavLink>
          <NavLink to='/services' activeStyle>
            บทที่ 3
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            บทที่ 4
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            บทที่ 5
          </NavLink>
          <NavLink to='/page6' activeStyle>
            บทที่ 6
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

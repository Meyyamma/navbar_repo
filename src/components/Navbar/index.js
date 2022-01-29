import React from "react";
// import { NavLink } from "react-router-dom";
import {
  Nav,
  NavBtn,
  NavMenu,
  NavLink,
  NavBtnLink,
  Bars,
} from "./NavbarElement";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sing Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

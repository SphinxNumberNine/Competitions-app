import React, { Component } from "react";
import { Navbar, NavItem } from 'react-materialize';

class Header extends Component {
  render() {
    return (
      <Navbar brand="logo" right>
        <NavItem onClick={() => console.log("test click")}>
          Getting started
        </NavItem>
      </Navbar>
    );
  }
}

export default Header;

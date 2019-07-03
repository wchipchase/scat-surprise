import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  state = {
    isOpen: false,
  }

  toggle() {
    this.setState({ isOpen: !this.isOpen });
  }

  render() {
    const { authed } = this.props;
    const buildNavbar = () => {
      if (authed) {
        return (
        <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={RRNavLink} to='/home'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to='/new'>New Scat</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={this.logMeOut}>Logout</NavLink>
        </NavItem>
      </Nav>
        );
      }
      return <Nav className="ml-auto" navbar />;
    };

    return (
  <div className="MyNavbar">
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Scat Surprise</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        {buildNavbar()}
      </Collapse>
    </Navbar>
  </div>
    );
  }
}

export default MyNavbar;

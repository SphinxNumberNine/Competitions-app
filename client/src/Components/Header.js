import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return (
          <li>
            <a href="/auth/google">Login with Google </a>
          </li>
        );
      case {}:
        return (
          <li>
            <a href="/auth/google">Login with Google </a>
          </li>
        );
      default:
        return [
          <li key="2">
            <a href="/dashboard">Dashboard</a>
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="red lighten-2">
        <div className="nav-wrapper">
          <a href={"/"} className="left brand-logo">
            Sanskriti School of Dance
          </a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  console.log({ auth });
  return { auth };
}

export default connect(mapStateToProps)(Header);

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions/auth';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

export class Header extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let registerLink, loginLink, viewPetsLink, logoutButton, appTitle;

    if (!this.props.loggedIn) {
      registerLink = (
        <li><Link to="/RegistrationPage" className="header-link">Sign Up</Link></li>
      );

      loginLink = (
        <li><Link to="/LoginPage" className="header-link">Log In</Link></li>
      );

      appTitle = (
        <li><Link to="/">Pet Log</Link></li>
      );
    }

    if (this.props.loggedIn) {
      viewPetsLink = (
        <li><Link to="/dashboard" className="header-link">View My Pets</Link></li>
      );

      logoutButton = (
        <li onClick={() => this.logout()}><Link to="/" className="header-link">Log Out</Link></li>
      );

      appTitle = (
        <li><Link to="/dashboard">Pet Log</Link></li>
      );
    }

    return (
      <nav role="navigation">
        <ul className="header-ul">
          {appTitle}
          {registerLink}
          {loginLink}
          {viewPetsLink}
          {logoutButton}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Header);

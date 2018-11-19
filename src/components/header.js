import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions/auth';
import { clearAuth } from '../actions/auth';
import { clearDogsOnLogout } from '../actions/dog';
import { clearAuthToken } from '../local-storage';
import './header.css';

export class Header extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
    this.props.dispatch(clearDogsOnLogout());
  }

  demoLogin() {
    this.props.dispatch(login('demouser', 'demouser'));
  }

  render() {
    let registerLink, loginLink, demoLink, viewPetsLink, logoutButton, appTitle;

    appTitle = (
      <li className="header-title item-heading"><Link to="/"><i className="fas fa-paw "></i><br/>Pet<br/>Log</Link></li>
    );

    if (!this.props.loggedIn) {
      registerLink = (
        <li className="header-link"><Link to="/registration">Sign Up</Link></li>
      );

      loginLink = (
        <li className="header-link"><Link to="/login">Log In</Link></li>
      );

      demoLink = (
        <li className="header-link" onClick={() => this.demoLogin()}><Link to="/">Demo</Link></li>
      );
    }

    if (this.props.loggedIn) {
      viewPetsLink = (
        <li className="header-link"><Link to="/dashboard">View My Pets</Link></li>
      );

      logoutButton = (
        <li className="header-link" onClick={() => this.logOut()}><Link to="/">Log Out</Link></li>
      );
    }

    return (
      <nav role="navigation">
        <ul className="header-ul">
          {appTitle}
          <div className="header-link-flex">
            {registerLink}
            {loginLink}
            {demoLink}
            {viewPetsLink}
            {logoutButton}
          </div>
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

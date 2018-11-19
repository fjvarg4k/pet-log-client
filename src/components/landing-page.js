import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './landing-page.css';

export function LandingPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div>
      <div className="landing-page-img-container"></div>
      <div className="description-wrapper">
        <div className="description-container">
          <i className="far fa-calendar-alt description-icon"></i>
          <p className="description-text">Simplify managing your pet's info</p>
        </div>
        <div className="description-container">
          <i className="fas fa-prescription-bottle-alt description-icon"></i>
          <p className="description-text">Keep track of all of their medicine</p>
        </div>
        <div className="description-container">
          <i className="fas fa-user-md description-icon"></i>
          <p className="description-text">Manage their veterinary records</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);

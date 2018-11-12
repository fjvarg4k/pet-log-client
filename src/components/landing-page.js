import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export function LandingPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />
  }

  return (
    <main role="main">
      <h1>Pet Log</h1>
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);

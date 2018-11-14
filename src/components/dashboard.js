import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Dogs from './dogs';

export class Dashboard extends React.Component {
  render () {
    return (
      <div className="dashboard">
        <h3>Hello</h3>
        <Link to="/add-new-dog">Add New Dog</Link>
        <Dogs />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // const {currentUser} = state.auth;
  return {
    // username: state.auth.currentUser.username,
    // name: `${currentUser.firstName}`,
  };
};

export default connect(mapStateToProps)(Dashboard);

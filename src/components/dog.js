import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Dog extends React.Component {
  render() {
    return (
      <div className="dog-overview">
        <h6>Dog Name</h6>
        <Link to="/dog-details">View Dog Info</Link>
        <Link to="/dog-medication">View Medication Info</Link>
        <Link to="/vet-info">View Vet Info</Link>
      </div>
    );
  }
}

export default connect()(Dog);

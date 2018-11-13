import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Medication extends React.Component {
  render() {
    return (
      <div className="medication-details">
        <h6>Medication Details</h6>
        <Link to="/edit-medication-details">Edit Medication Info</Link>
      </div>
    );
  }
}

export default connect()(Medication);

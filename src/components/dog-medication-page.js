import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';
import Medication from './medication';

export class DogMedicationPage extends React.Component {
  render() {
    return (
      <div className="medication-list">
        <h4>Your Pet's Medication</h4>
        <Link to="/add-new-medication">Add New Medication</Link>
        <Medication />
      </div>
    );
  }
}

export default requiresLogin()(connect()(DogMedicationPage));

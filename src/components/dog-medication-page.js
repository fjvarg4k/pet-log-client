import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchDogMedications } from '../actions/medication';
import { fetchDogById } from '../actions/dog';
import requiresLogin from './requires-login';
// import Medication from './medication';

export class DogMedicationPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDogById(this.props.match.params.dogid));
    this.props.dispatch(fetchDogMedications(this.props.match.params.dogid));
  }

  render() {
    const medications = this.props.medicationsList;
    const medicationInfo = medications.map((medication, index) => {
      return (
        <div className="medication-info-link" key={index}>
          <h3>{medication.name}</h3>
          <button onClick={() => this.props.history.push(`/medication-details/${medication._id}`)}>View Medication Info</button>
        </div>
      );
    })

    return (
      <div className="medication-list">
        <Link to="/dashboard">Back</Link>
        <h4>Your Pet's Medication</h4>
        <Link to="/add-new-medication">Add New Medication</Link>
        {medicationInfo}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  medicationsList: state.medication.medications
});

export default withRouter(requiresLogin()(connect(mapStateToProps)(DogMedicationPage)));

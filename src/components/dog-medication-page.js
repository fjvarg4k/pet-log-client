import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDogMedications } from '../actions/medication';
import { fetchDogById } from '../actions/dog';
import requiresLogin from './requires-login';
import Medication from './medication';

export class DogMedicationPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDogById(this.props.match.params.dogid));
    this.props.dispatch(fetchDogMedications(this.props.match.params.dogid));
    // if (this.props.medicationSuccessfullyDeleted === true) {
    //   this.props.dispatch(fetchDogMedications(this.props.match.params.dogid));
    // }
  }

  render() {
    const medications = this.props.medicationsList;
    const medicationInfo = medications.map((medication, index) => {
      return (
        <Medication medication={medication} dispatch={this.dispatch} key={index} />
      );
    })

    return (
      <div className="medication-list">
        <h4>Your Pet's Medication</h4>
        <Link to="/add-new-medication">Add New Medication</Link>
        {medicationInfo}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  medicationsList: state.medication.medications,
  medicationSuccessfullyDeleted: state.medication.medicationDeleted
});

export default requiresLogin()(connect(mapStateToProps)(DogMedicationPage));

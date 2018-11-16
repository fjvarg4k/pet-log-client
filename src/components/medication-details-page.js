import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchMedicationById } from '../actions/medication';
import { deleteDogMedication } from '../actions/medication';
import requiresLogin from './requires-login';
// import Medication from './medication';

export class MedicationDetailsPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMedicationById(this.props.match.params.medicationid));
  }

  handleDelete() {
    this.props.dispatch(deleteDogMedication(this.props.medication.id));
    this.props.history.push(`/dog-medication/${this.props.dog.id}`);
  }

  handleRedirectToPreviousPage() {
    this.props.history.push(`/dog-medication/${this.props.dog.id}`);
  }

  render() {
    return (
      <div className="medication-details">
        <button onClick={() => this.handleRedirectToPreviousPage()}>Back</button>
        <button onClick={() => this.handleDelete()}>Delete Medication</button>
        <p>Medication Name: {this.props.medication.name}</p>
        <p>Medication Days: {this.props.medication.medicationDays}</p>
        <p>Medication Time: {this.props.medication.medicationTime}</p>
        <p>Medication Description: {this.props.medication.medicationDescription}</p>
        <Link to="/edit-medication-details">Edit Medication Info</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  medication: state.medication.currentMedication,
  dog: state.dog.currentDog
});

export default withRouter(requiresLogin()(connect(mapStateToProps)(MedicationDetailsPage)));

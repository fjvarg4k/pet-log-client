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

  render() {
    return (
      <div className="medication-details">
        <div className="dog-details-button-container">
          <button className="delete-dog-button" onClick={() => this.handleDelete()}><i className="fas fa-minus-circle button-icon"></i>Delete Medication</button>
          <Link className="edit-dog-button" to="/edit-medication-details"><i className="fas fa-edit button-icon"></i>Edit Medication Info</Link>
        </div>
        <div className="dog-details-container">
          <h3 className="dog-details-title item-heading">Medication Details</h3>
          <p className="dog-details-item">Medication Name: {this.props.medication.name}</p>
          <p className="dog-details-item">Medication Days: {this.props.medication.medicationDays}</p>
          <p className="dog-details-item">Medication Time: {this.props.medication.medicationTime}</p>
          <p className="dog-details-item">Medication Description: {this.props.medication.medicationDescription}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  medication: state.medication.currentMedication,
  dog: state.dog.currentDog
});

export default withRouter(requiresLogin()(connect(mapStateToProps)(MedicationDetailsPage)));

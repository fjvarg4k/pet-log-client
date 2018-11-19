import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchDogMedications } from '../actions/medication';
import { fetchDogById } from '../actions/dog';
import requiresLogin from './requires-login';
import './dog-medication-page.css';

export class DogMedicationPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDogById(this.props.match.params.dogid));
    this.props.dispatch(fetchDogMedications(this.props.match.params.dogid));
  }

  render() {
    const medications = this.props.medicationsList;
    const medicationInfo = medications.map((medication, index) => {
      return (
        <div className="dog-overview" key={index}>
          <h3 className="dog-overview-title">{medication.name}</h3>
          <div className="dog-overview-button-container">
            <button className="dog-overview-button" onClick={() => this.props.history.push(`/medication-details/${medication._id}`)}>View Medication Info</button>
          </div>
        </div>
      );
    })

    return (
      <div className="medication-list">
        <div className="add-new-medication-button-container">
          <Link className="add-new-medication-button" to="/add-new-medication"><i className="fas fa-plus-circle button-icon"></i>Add New Medication</Link>
        </div>
        <div className="dogs-list">
          {medicationInfo}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  medicationsList: state.medication.medications
});

export default withRouter(requiresLogin()(connect(mapStateToProps)(DogMedicationPage)));

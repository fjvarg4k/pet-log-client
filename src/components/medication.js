import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { deleteDogMedication } from '../actions/medication';

export class Medication extends React.Component {
  handleDelete() {
    this.props.dispatch(deleteDogMedication(this.props.medication._id));
    // this.props.history.push(`/dog-medication/${this.props.currentDogId}`);
    // console.log(this.props);
    // this.setState(this.state);
  }

  render() {
    return (
      <div className="medication-details">
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
  currentDogId: state.dog.currentDog.id
});

export default withRouter(connect(mapStateToProps)(Medication));

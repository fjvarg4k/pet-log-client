import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import AddNewMedicationForm from './add-new-medication-form';

export class AddNewMedicationPage extends React.Component {
  render() {
    return (
      <div className="add-new-medication">
        <h3>Add New Medication</h3>
        <AddNewMedicationForm />
      </div>
    );
  }
}

export default requiresLogin()(connect()(AddNewMedicationPage));

import React from 'react';
import { connect } from 'react-redux';
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

export default connect()(AddNewMedicationPage);

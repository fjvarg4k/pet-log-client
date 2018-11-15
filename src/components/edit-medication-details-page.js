import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import EditMedicationDetailsForm from './edit-medication-details-form';

export class EditMedicationDetailsPage extends React.Component {
  render() {
    return (
      <div className="edit-medication-details">
        <h3>Edit Medication Details</h3>
        <EditMedicationDetailsForm />
      </div>
    );
  }
}

export default requiresLogin()(connect()(EditMedicationDetailsPage));

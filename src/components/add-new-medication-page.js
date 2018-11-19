import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import AddNewMedicationForm from './add-new-medication-form';

export class AddNewMedicationPage extends React.Component {
  render() {
    return (
      <div className="add-new-medication">
        <AddNewMedicationForm />
      </div>
    );
  }
}

export default requiresLogin()(connect()(AddNewMedicationPage));

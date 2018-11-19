import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import EditVetInfoDetailsForm from './edit-vet-info-details-form';

export class EditVetInfoDetailsPage extends React.Component {
  render() {
    return (
      <div className="edit-vet-info">
        <EditVetInfoDetailsForm />
      </div>
    );
  }
}

export default requiresLogin()(connect()(EditVetInfoDetailsPage));

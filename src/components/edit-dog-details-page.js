import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import EditDogDetailsForm from './edit-dog-details-form';

export function EditDogDetailsPage(props) {

  return (
    <div className="edit-dog-details">
      <EditDogDetailsForm />
    </div>
  );
}

export default requiresLogin()(connect()(EditDogDetailsPage));

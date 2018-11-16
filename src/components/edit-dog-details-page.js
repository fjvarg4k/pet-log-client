import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import requiresLogin from './requires-login';
import EditDogDetailsForm from './edit-dog-details-form';

export function EditDogDetailsPage(props) {

  return (
    <div className="edit-dog-details">
      <h3>Edit Dog Details</h3>
      <EditDogDetailsForm />
    </div>
  );
}

const mapStateToProps = state => ({
  submitSuccess: state.dog.submittedForm === true
});

export default requiresLogin()(connect(mapStateToProps)(EditDogDetailsPage));

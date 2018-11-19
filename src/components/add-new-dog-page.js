import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import requiresLogin from './requires-login';
import AddNewDogForm from './add-new-dog-form';

export function AddNewDogPage(props) {
  if (props.submitSuccess) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div className="add-new-dog">
      <AddNewDogForm />
    </div>
  );
}

const mapStateToProps = state => ({
  submitSuccess: state.dog.submittedForm === true
});

export default requiresLogin()(connect(mapStateToProps)(AddNewDogPage));

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AddNewDogForm from './add-new-dog-form';

export function AddNewDogPage(props) {
  // if (props.dogCreated) {
  //   return <Redirect to="dashboard" />
  // }
  return (
    <div className="add-new-dog">
      <h3>Add New Dog</h3>
      <AddNewDogForm />
    </div>
  );
}

const mapStateToProps = state => ({
  dogCreated: state.dog.dog !== null
});

export default connect(mapStateToProps)(AddNewDogPage);

import React from 'react';
import { connect } from 'react-redux';
import AddNewDogForm from './add-new-dog-form';

export class AddNewDogPage extends React.Component {
  render() {
    return (
      <div className="add-new-dog">
        <h3>Add New Dog</h3>
        <AddNewDogForm />
      </div>
    );
  }
}

export default connect()(AddNewDogPage);

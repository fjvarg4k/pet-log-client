import React from 'react';
import { connect } from 'react-redux';
import AddNewVetForm from './add-new-vet-form';

export class AddNewVetPage extends React.Component {
  render() {
    return (
      <div className="add-new-vet">
        <h3>Add New Vet</h3>
        <AddNewVetForm />
      </div>
    );
  }
}

export default connect()(AddNewVetPage);

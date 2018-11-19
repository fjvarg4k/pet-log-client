import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import AddNewVetForm from './add-new-vet-form';

export class AddNewVetPage extends React.Component {
  render() {
    return (
      <div className="add-new-vet">
        <AddNewVetForm />
      </div>
    );
  }
}

export default requiresLogin()(connect()(AddNewVetPage));

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';

export class DogVetInfoPage extends React.Component {
  render() {
    return (
      <div className="dog-vet-info">
        <h6>Vet Info</h6>
        <Link to="/add-new-vet">Add Vet Info</Link>
        <Link to="/edit-vet-info">Edit Vet Info</Link>
      </div>
    );
  }
}

export default requiresLogin()(connect()(DogVetInfoPage));

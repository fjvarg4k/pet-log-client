import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class DogDetailsPage extends React.Component {
  render() {
    return (
      <div className="dog-details">
        <h6>Dog Details</h6>
        <Link to="/edit-dog-details">Edit Dog Info</Link>
      </div>
    );
  }
}

export default connect()(DogDetailsPage);

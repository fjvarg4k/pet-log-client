import React from 'react';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class Dog extends React.Component {
  render() {
    return (
      <div className="dog-overview">
        <h3>{this.props.dog.name}</h3>
        <button onClick={() => this.props.history.push(`/dog-details/${this.props.dog.id}`)}>View Dog Info</button>
        <button onClick={() => this.props.history.push(`/dog-medication/${this.props.dog.id}`)}>View Dog Medications </button>
        <button onClick={() => this.props.history.push(`/vet-info/${this.props.dog.id}`)}>View Vet Info</button>
      </div>
    );
  }
}

export default (withRouter)(Dog);

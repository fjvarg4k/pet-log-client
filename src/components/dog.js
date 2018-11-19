import React from 'react';
import { withRouter } from 'react-router-dom';

export class Dog extends React.Component {
  render() {
    return (
      <div className="dog-overview">
        <h3 className="dog-overview-title">{this.props.dog.name}</h3>
        <div className="dog-overview-button-container">
          <button className="dog-overview-button" onClick={() => this.props.history.push(`/dog-details/${this.props.dog.id}`)}><i className="fas fa-dog button-icon"></i>View Dog Info</button>
          <button className="dog-overview-button" onClick={() => this.props.history.push(`/dog-medication/${this.props.dog.id}`)}><i className="fas fa-pills button-icon"></i>View Dog Medications </button>
          <button className="dog-overview-button" onClick={() => this.props.history.push(`/vet-info/${this.props.dog.id}`)}><i className="fas fa-notes-medical button-icon"></i>View Vet Info</button>
        </div>
      </div>
    );
  }
}

export default (withRouter)(Dog);

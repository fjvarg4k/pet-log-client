import React from 'react';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Dog = (props) => {
  return (
    <div className="dog-overview">
      <h3>{props.dog.name}</h3>
      <button>Delete Info</button>
      <button onClick={() => props.history.push(`/dog-details/${props.dog.id}`)}>View Dog Info</button>
      <button onClick={() => props.history.push(`/dog-medication/${props.dog.id}`)}>View Medication Info</button>
      <button onClick={() => props.history.push(`/vet-info/${props.dog.id}`)}>View Vet Info</button>
    </div>
  );
}

export default (withRouter)(Dog);

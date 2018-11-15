import React from 'react';
// import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const Dog = (props) => {
  return (
    <div className="dog-overview">
      <h3>{props.dog.name}</h3>
      {/* <Link to="/dog-details">View Dog Info</Link> */}
      <button onClick={() => props.history.push(`/dog-details/${props.dog.id}`)}>View Dog Info</button>
      <Link to="/dog-medication">View Medication Info</Link>
      {/* <Link to="/vet-info">View Vet Info</Link> */}
      <button onClick={() => props.history.push(`/vet-info/${props.dog.id}`)}>View View Info</button>
    </div>
  );
}

export default (withRouter)(Dog);

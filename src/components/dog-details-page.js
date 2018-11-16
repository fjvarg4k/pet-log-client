import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchDogById, deleteDogById } from '../actions/dog';
import requiresLogin from './requires-login';

export class DogDetailsPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDogById(this.props.match.params.dogid));
  }

  handleDelete() {
    this.props.dispatch(deleteDogById(this.props.dogInfo.id));
    this.props.history.push('/dashboard');
  }

  render() {
    const dog = this.props.dogInfo;

    return (
      <div className="dog-details">
        <Link to="/dashboard">Back</Link>
        <button onClick={() => this.handleDelete()}>Delete Pet Profile</button>
        <h6>Dog Details</h6>
        <p>Pet Name: {dog.name}</p>
        <p>Pet Age: {dog.age}</p>
        <p>Breed: {dog.breed}</p>
        <p>Weight: {dog.weight} lb(s)</p>
        <p>Gender: {dog.gender}</p>
        <Link to="/edit-dog-details">Edit Dog Info</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dogInfo: state.dog.currentDog
});

export default withRouter(requiresLogin()(connect(mapStateToProps)(DogDetailsPage)));

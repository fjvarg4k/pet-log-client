import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchDogById, deleteDogById } from '../actions/dog';
import requiresLogin from './requires-login';
import './dog-details-page.css';

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
        <div className="dog-details-button-container">
          <button className="delete-dog-button" onClick={() => this.handleDelete()}><i className="fas fa-minus-circle button-icon"></i>Delete Pet Profile</button><br/>
          <Link className="edit-dog-button" to="/edit-dog-details"><i className="fas fa-edit button-icon"></i>Edit Dog Info</Link>
        </div>
        <div className="dog-details-container">
          <h3 className="dog-details-title item-heading">Dog Details</h3>
          <p className="dog-details-item">Pet Name: {dog.name}</p>
          <p className="dog-details-item">Pet Age: {dog.age}</p>
          <p className="dog-details-item">Breed: {dog.breed}</p>
          <p className="dog-details-item">Weight: {dog.weight} lb(s)</p>
          <p className="dog-details-item">Gender: <span className="capitalize-gender">{dog.gender}</span></p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dogInfo: state.dog.currentDog
});

export default withRouter(requiresLogin()(connect(mapStateToProps)(DogDetailsPage)));

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDogById } from '../actions/dog';
import requiresLogin from './requires-login';

export class DogVetInfoPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDogById(this.props.match.params.dogid));
  }

  // If user has not added vet info yet, the Add Vet button will be displayed
  // Otherwise, The vet's info and edit button will be displayed
  displayAddBtnOrVetInfo() {
    if (this.props.dogInfo !== undefined && this.props.dogInfo.vetName === '') {
      return (
        <div className="vet-details">
          <div className="add-new-dog-button-container">
            <Link className="add-new-dog-button" to="/add-new-vet"><i className="fas fa-plus-circle button-icon"></i>Add Vet Info</Link>
          </div>
        </div>
      );
    } else if (this.props.dogInfo !== undefined){
      return (
        <div className="vet-details">
          <div className="add-new-dog-button-container">
            <Link className="add-new-dog-button" to="/edit-vet-info"><i className="fas fa-edit button-icon"></i>Edit Vet Info</Link>
          </div>
          <div className="dog-details-container">
            <h3 className="dog-details-title item-heading">Vet Info</h3>
            <p className="dog-details-item">Veterinarian Name: {this.props.dogInfo.vetName}</p>
            <p className="dog-details-item">Vet Location Name: {this.props.dogInfo.vetLocationName}</p>
            <p className="dog-details-item">Address: {this.props.dogInfo.address}</p>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="dog-vet-info">
        {this.displayAddBtnOrVetInfo()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dogInfo: state.dog.currentDog.vetInfo
});

export default requiresLogin()(connect(mapStateToProps)(DogVetInfoPage));

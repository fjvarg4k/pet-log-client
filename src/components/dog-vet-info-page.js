import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDogById } from '../actions/dog';
import requiresLogin from './requires-login';

export class DogVetInfoPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDogById(this.props.match.params.dogid));
  }

  // displayAddBtnOrVetInfo() {
  //   if (this.props.dogInfo.vetName === '') {
  //     return (
  //       <Link to="/add-new-vet">Add Vet Info</Link>
  //     );
  //   }
  //   return this.checkVetInfo();
  // }

  checkVetInfo() {
    if (this.props.dogInfo !== undefined) {
      return (
        <div>
          <p>Veterinarian Name: {this.props.dogInfo.vetName}</p>
          <p>Vet Location Name: {this.props.dogInfo.vetLocationName}</p>
          <p>Address: {this.props.dogInfo.address}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="dog-vet-info">
        <h6>Vet Info</h6>
        <Link to="/add-new-vet">Add Vet Info</Link>
        {this.checkVetInfo()}
        <Link to="/edit-vet-info">Edit Vet Info</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dogInfo: state.dog.currentDog.vetInfo
});

export default requiresLogin()(connect(mapStateToProps)(DogVetInfoPage));

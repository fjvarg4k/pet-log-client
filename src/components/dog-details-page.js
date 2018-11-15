import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDogById } from '../actions/dog';
import requiresLogin from './requires-login';

export class DogDetailsPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDogById(this.props.match.params.dogid));
    console.log(this.props);
    // console.log(this.state.dog.currentDog);
  }

  componentWillReceiveProps(nextProps) {
    // const {dogInfo} = this.nextProps;
    this.setState(nextProps);
    console.log(this.props);
  }

  render() {
    // const dog = this.props.dogInfo.name;
    // const dog = dogInfo;
    // console.log(dog);
    return (
      <div className="dog-details">
        <h6>Dog Details</h6>
        <h3>Name: {this.state.dog.currentDog.name}</h3>
        <Link to="/edit-dog-details">Edit Dog Info</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dogInfo: state.dog.currentDog
});

export default requiresLogin()(connect(mapStateToProps)(DogDetailsPage));

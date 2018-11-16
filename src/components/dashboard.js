import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDogs } from '../actions/dog';
// import { fetchDogMedications } from '../actions/medication';
import requiresLogin from './requires-login';
import Dogs from './dogs';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDogs());
  }

  render () {
    return (
      <div className="dashboard">
        <h3>Hello</h3>
        <Link to="/add-new-dog">Add New Dog</Link>
        <Dogs />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dogsList: state.dog.dogs
});
export default requiresLogin()(connect(mapStateToProps)(Dashboard));

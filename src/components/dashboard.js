import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDogs } from '../actions/dog';
import requiresLogin from './requires-login';
import Dogs from './dogs';
import './dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDogs());
  }

  render () {
    return (
      <div className="dashboard">
        <div className="add-new-dog-button-container">
          <Link className="add-new-dog-button" to="/add-new-dog"><i className="fas fa-plus-circle button-icon"></i>Add New Dog</Link>
        </div>
        <Dogs />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dogsList: state.dog.dogs
});
export default requiresLogin()(connect(mapStateToProps)(Dashboard));

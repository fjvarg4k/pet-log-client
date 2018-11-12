import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import LandingPage from './components/landing-page';
import RegistrationPage from './components/registration-page';
import LoginPage from './components/login-page';
import Dashboard from './components/dashboard';
import DogDetailsPage from './components/dog-details-page';
import DogMedicationPage from './components/dog-medication-page';
import DogVetInfoPage from './components/dog-vet-info-page';
import EditDogDetailsPage from './components/edit-dog-details-page';
import EditMedicationDetailsPage from './components/edit-medication-details-page';
import EditVetInfoDetailsPage from './components/edit-vet-info-details-page';
import Footer from './components/footer';
import { refreshAuthToken } from './actions/auth';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When logged in, fresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when logged out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      // <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/registration" component={RegistrationPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/dog-details/:dogid" component={DogDetailsPage} />
          <Route path="/dog-medication/:medicationid" component={DogMedicationPage} />
          <Route path="/vet-info/:dogid" component={DogVetInfoPage} />
          <Route exact path="/edit-dog-details" component={EditDogDetailsPage} />
          <Route exact path="/edit-medication-details" component={EditMedicationDetailsPage} />
          <Route exact path="/edit-vet-info" component={EditVetInfoDetailsPage} />
          <Footer />
        </div>
      // </Router>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));

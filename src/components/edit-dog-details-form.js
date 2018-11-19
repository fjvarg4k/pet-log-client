import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty, isTrimmed } from '../validators';
import { updateDogById } from '../actions/dog';

export class EditDogDetailsForm extends React.Component {
  onSubmit(values) {
    const updatedDog = Object.assign({}, values);
    this.props.dispatch(updateDogById(updatedDog));
    this.props.history.push(`/dog-details/${this.props.initialValues.id}`);
  }

  handleCancellation() {
    this.props.history.push(`/dog-details/${this.props.initialValues.id}`)
  }

  render() {
    return (
      <form
        className="edit-dog-details-form"
        onSubmit={this.props.handleSubmit(values =>
        this.onSubmit(values))}
      >
        <fieldset>
          <legend>Edit Dog Info</legend>
          <div className="row form-group">
            <div className="col-3 form-label-container">
              <label className="form-label" htmlFor="name">Name</label>
            </div>
            <div className="col-6">
              <Field component={Input} type="text" name="name" validate={[required, nonEmpty, isTrimmed]}/>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-3 form-label-container">
              <label className="form-label" htmlFor="breed">Breed</label>
            </div>
            <div className="col-6">
              <Field component={Input} type="text" name="breed" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-3 form-label-container">
              <label className="form-label" htmlFor="weight">Weight</label>
            </div>
            <div className="col-6">
              <Field component={Input} type="text" name="weight" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-3 form-label-container">
              <label className="form-label" htmlFor="age">Age</label>
            </div>
            <div className="col-6">
              <Field component={Input} type="text" name="age" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-3 form-label-container">
              <label>Male</label>
            </div>
            <div className="col-6">
              <Field component={Input} type="radio" id="gender" name="gender" value="male" validate={[required]} />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-3 form-label-container">
              <label>Female</label>
            </div>
            <div className="col-6">
              <Field component={Input} type="radio" id="gender" name="gender" value="female" validate={[required]} />
            </div>
          </div>
          <div className="form-button-container">
            <button
              className="form-button submit-button"
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
            >
              Submit
            </button>
            <button
              className="form-button cancel-button"
              onClick={() => this.handleCancellation()}
            >
              Cancel
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  initialValues: state.dog.currentDog
});

EditDogDetailsForm = reduxForm({
  form: 'edit-dog-details',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('edit-dog-details', Object.keys(errors)[0]))
})(EditDogDetailsForm)

export default withRouter(connect(mapStateToProps)(EditDogDetailsForm));

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import { createNewDog } from '../actions/dog';
import Input from './input';
import RadioInput from './radio-input';
import { required, nonEmpty, isTrimmed } from '../validators';

export class AddNewDogForm extends React.Component {
  onSubmit(values) {
    const dog = Object.assign({}, values);
    return this.props.dispatch(createNewDog(dog));
  }

  handleCancellation() {
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <form
        className="add-new-dog-form"
        onSubmit={this.props.handleSubmit(values =>
        this.onSubmit(values))}
      >
        <fieldset>
          <legend>Register New Pet</legend>
          <div className="row form-group">
            <div className="col-3 form-label-container">
              <label className="form-label" htmlFor="name">Name</label>
            </div>
            <div className="col-6">
              <Field component={Input} type="text" name="name" validate={[required, nonEmpty, isTrimmed]} />
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
              <Field component={RadioInput} type="radio" id="gender" name="gender" value="male" validate={[required]} />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-3 form-label-container">
              <label>Female</label>
            </div>
            <div className="col-6">
              <Field component={RadioInput} type="radio" id="gender" name="gender" value="female" validate={[required]} />
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

AddNewDogForm = reduxForm({
  form: 'add-new-dog',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('add-new-dog', Object.keys(errors)[0]))
})(AddNewDogForm)

export default (withRouter)(AddNewDogForm);

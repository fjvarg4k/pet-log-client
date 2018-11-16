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
          <label className="form-label" htmlFor="name">Name</label>
          <Field component={Input} type="text" name="name" validate={[required, nonEmpty, isTrimmed]}/>
          <label className="form-label" htmlFor="breed">Breed</label>
          <Field component={Input} type="text" name="breed" />
          <label className="form-label" htmlFor="weight">Weight</label>
          <Field component={Input} type="text" name="weight" />
          <label className="form-label" htmlFor="age">Age</label>
          <Field component={Input} type="text" name="age" />
          <div>
            <label className="form-label">Gender</label>
            <label><Field component={Input} type="radio" name="gender" value="male" validate={[required]} />Male</label>
            <label><Field component={Input} type="radio" name="gender" value="female" validate={[required]} />Female</label>
          </div>
          <button
            className="form-button"
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Confirm Changes
          </button>
          <button
            className="form-button"
            onClick={() => this.handleCancellation()}
          >
            Cancel
          </button>
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

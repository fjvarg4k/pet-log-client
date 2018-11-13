import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty, isTrimmed } from '../validators';

export class EditDogDetailsForm extends React.Component {
  onSubmit(values) {}

  render() {
    return (
      <form
        className="edit-dog-details-form"
        onSubmit={this.onSubmit}
      >
        <fieldset>
          <legend>Edit Dog Info</legend>
          <label className="form-label" htmlFor="name">Name</label>
          <Field component={Input} type="text" name="name" validate={[required, nonEmpty, isTrimmed]} />
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
            Confirm Edit
          </button>
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({
  form: 'edit-dog-details',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('edit-dog-details', Object.keys(errors)[0]))
})(EditDogDetailsForm);

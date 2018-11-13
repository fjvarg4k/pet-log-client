import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
// import { required, nonEmpty, isTrimmed } from '../validators';

export class EditVetInfoDetailsForm extends React.Component {
  onSubmit(values) {}

  render() {
    return (
      <form
        className="edit-vet-info-form"
        onSubmit={this.onSubmit}
      >
        <fieldset>
          <legend>Edit Dog Info</legend>
          <label className="form-label" htmlFor="vetName">Vet Name</label>
          <Field component={Input} type="text" name="vetName"  />
          <label className="form-label" htmlFor="vetLocationName">Vet Location Name</label>
          <Field component={Input} type="text" name="vetLocationName" />
          <label className="form-label" htmlFor="address">Address</label>
          <Field component={Input} type="text" name="address" />
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
  form: 'edit-vet-info',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('edit-vet-info', Object.keys(errors)[0]))
})(EditVetInfoDetailsForm);

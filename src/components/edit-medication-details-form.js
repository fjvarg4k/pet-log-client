import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import TextArea from './textarea';

export class EditMedicationDetailsForm extends React.Component {
  onSubmit(values) {}

  render() {
    return (
      <form
        className="edit-medication-details-form"
        onSubmit={this.onSubmit}
      >
        <fieldset>
          <legend>Edit Medication Info</legend>
          <label className="form-label" htmlFor="name">Name</label>
          <Field component={Input} type="text" name="name" />
          <label className="form-label" htmlFor="medicationDays">Medication Days</label>
          <Field component={Input} type="text" name="medicationDays" />
          <label className="form-label" htmlFor="medicationTime">Medication Time</label>
          <Field component={Input} type="text" name="medicationTime" />
          <label className="form-label" htmlFor="medicationDescription">Medication Description</label>
          <Field component={TextArea} type="TextArea" name="medicationDescription" />
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
  form: 'edit-medication-details',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('edit-medication-details', Object.keys(errors)[0]))
})(EditMedicationDetailsForm);
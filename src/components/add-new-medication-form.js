import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import TextArea from './textarea';

export class AddNewMedicationForm extends React.Component {
  onSubmit(values) {}

  render() {
    return (
      <form
        className="add-new-medication-form"
        onSubmit={this.onSubmit}
      >
        <fieldset>
          <legend>Add New Medication</legend>
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
  form: 'add-new-medication',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('add-new-medication', Object.keys(errors)[0]))
})(AddNewMedicationForm);

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import { updateMedicationById } from '../actions/medication';
import Input from './input';
import TextArea from './textarea';

export class EditMedicationDetailsForm extends React.Component {
  onSubmit(values) {
    const updatedMedication = Object.assign({}, values);
    console.log(updatedMedication);
    this.props.dispatch(updateMedicationById(updatedMedication));
    this.props.history.push(`/medication-details/${updatedMedication.id}`)
  }

  handleCancellation() {
    this.props.history.push(`/medication-details/${this.props.initialValues.id}`);
  }

  render() {
    return (
      <form
        className="edit-medication-details-form"
        onSubmit={this.props.handleSubmit(values =>
        this.onSubmit(values))}
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
  initialValues: state.medication.currentMedication
});

EditMedicationDetailsForm = reduxForm({
  form: 'edit-medication-details',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('edit-medication-details', Object.keys(errors)[0]))
})(EditMedicationDetailsForm)

export default withRouter(connect(mapStateToProps)(EditMedicationDetailsForm));

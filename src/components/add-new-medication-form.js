import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import { createNewMedication } from '../actions/medication';
import Input from './input';
import TextArea from './textarea';

export class AddNewMedicationForm extends React.Component {
  onSubmit(values) {
    // const dog = this.props.dogId;
    const medication = Object.assign({}, values);
    this.props.dispatch(createNewMedication(this.props.dogId, medication));
    this.props.history.push(`/dog-medication/${this.props.dogId}`);
  }

  handleCancellation() {
    this.props.history.push(`/dog-medication/${this.props.dogId}`)
  }

  render() {
    return (
      <form
        className="add-new-medication-form"
        onSubmit={this.props.handleSubmit(values =>
        this.onSubmit(values))}
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
            Add
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
  dogId: state.dog.currentDog.id
});

AddNewMedicationForm = reduxForm({
  form: 'add-new-medication',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('add-new-medication', Object.keys(errors)[0]))
})(AddNewMedicationForm)

export default withRouter(connect(mapStateToProps)(AddNewMedicationForm));

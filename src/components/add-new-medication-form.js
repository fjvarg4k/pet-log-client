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
          <div className="row form-group">
            <div className="col-3 form-label-container">
              <label className="form-label" htmlFor="name">Name</label>
            </div>
            <div className="col-6">
              <Field component={Input} type="text" name="name" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-3 form-label-container">
              <label className="form-label" htmlFor="medicationDays">Medication Days</label>
            </div>
            <div className="col-6">
              <Field component={Input} type="text" name="medicationDays" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-3 form-label-container">
              <label className="form-label" htmlFor="medicationTime">Medication Time</label>
            </div>
            <div className="col-6">
              <Field component={Input} type="text" name="medicationTime" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-3 form-label-container">
              <label className="form-label" htmlFor="medicationDescription">Medication Description</label>
            </div>
            <div className="col-6">
              <Field component={TextArea} type="TextArea" name="medicationDescription" />
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
  dogId: state.dog.currentDog.id
});

AddNewMedicationForm = reduxForm({
  form: 'add-new-medication',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('add-new-medication', Object.keys(errors)[0]))
})(AddNewMedicationForm)

export default withRouter(connect(mapStateToProps)(AddNewMedicationForm));

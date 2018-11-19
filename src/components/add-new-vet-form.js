import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { updateDogById } from '../actions/dog';

export class AddNewVetForm extends React.Component {
  onSubmit(values) {
    const dog = this.props.initialValues;
    dog.vetInfo.vetName = values.vetName;
    dog.vetInfo.vetLocationName = values.vetLocationName;
    dog.vetInfo.address = values.address;
    this.props.dispatch(updateDogById(dog));
    this.props.history.push(`/vet-info/${dog.id}`);
  }

  handleCancellation() {
    this.props.history.push(`/vet-info/${this.props.initialValues.id}`);
  }

  render() {
    return (
      <form
        className="add-new-vet-form"
        onSubmit={this.props.handleSubmit(values =>
        this.onSubmit(values))}
      >
        <fieldset>
          <legend>Add Vet Info</legend>
          <div className="row form-group">
            <div className="col-3 form-label-container">
              <label className="form-label" htmlFor="vetName">Vet Name</label>
            </div>
            <div className="col-6">
              <Field component={Input} type="text" name="vetName" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-3 form-label-container">
              <label className="form-label" htmlFor="vetLocationName">Vet Location Name</label>
            </div>
            <div className="col-6">
              <Field component={Input} type="text" name="vetLocationName" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-3 form-label-container">
              <label className="form-label" htmlFor="address">Address</label>
            </div>
            <div className="col-6">
              <Field component={Input} type="text" name="address" />
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

AddNewVetForm = reduxForm({
  form: 'add-new-vet',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('add-new-vet', Object.keys(errors)[0]))
})(AddNewVetForm)

export default withRouter(connect(mapStateToProps)(AddNewVetForm));

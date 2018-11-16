import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import { updateDogById } from '../actions/dog';
import Input from './input';
// import { required, nonEmpty, isTrimmed } from '../validators';

export class EditVetInfoDetailsForm extends React.Component {
  onSubmit(values) {
    const dog = this.props.initialValues;
    dog.vetInfo.vetName = values.vetInfo.vetName;
    dog.vetInfo.vetLocationName = values.vetInfo.vetLocationName;
    dog.vetInfo.address = values.vetInfo.address;
    this.props.dispatch(updateDogById(dog));
    this.props.history.push(`/vet-info/${dog.id}`);
  }

  handleCancellation() {
    this.props.history.push(`/vet-info/${this.props.initialValues.id}`);
  }

  render() {
    return (
      <form
        className="edit-vet-info-form"
        onSubmit={this.props.handleSubmit(values =>
        this.onSubmit(values))}
      >
        <fieldset>
          <legend>Edit Vet Info</legend>
          <label className="form-label" htmlFor="vetInfo.vetName">Vet Name</label>
          <Field component={Input} type="text" name="vetInfo.vetName" />
          <label className="form-label" htmlFor="vetInfo.vetLocationName">Vet Location Name</label>
          <Field component={Input} type="text" name="vetInfo.vetLocationName" />
          <label className="form-label" htmlFor="vetInfo.address">Address</label>
          <Field component={Input} type="text" name="vetInfo.address" />
          <button
            className="form-button"
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Confirm Edit
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

EditVetInfoDetailsForm = reduxForm({
  form: 'edit-vet-info',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('edit-vet-info', Object.keys(errors)[0]))
})(EditVetInfoDetailsForm)

export default withRouter(connect(mapStateToProps)(EditVetInfoDetailsForm));

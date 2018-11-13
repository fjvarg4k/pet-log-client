import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
// import { required, nonEmpty, isTrimmed } from '../validators';

export class AddNewVetForm extends React.Component {
  onSubmit(values) {}

  render() {
    return (
      <form
        className="add-new-vet-form"
        onSubmit={this.onSubmit}
      >
        <fieldset>
          <legend>Add Vet Info</legend>
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
            Submit
          </button>
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({
  form: 'add-new-vet',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('add-new-vet', Object.keys(errors)[0]))
})(AddNewVetForm);

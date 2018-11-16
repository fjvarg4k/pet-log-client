import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { updateDogById } from '../actions/dog';
// import { required, nonEmpty, isTrimmed } from '../validators';

export class AddNewVetForm extends React.Component {
  onSubmit(values) {
    // const vetInfo = Object.assign({}, values);
    // const {vetName, vetLocationName, address} = values;
    // const vetInfo = {};
    // vetInfo = vetName, vetLocationName, address;
    const dog = this.props.initialValues;
    dog.vetInfo.vetName = values.vetName;
    dog.vetInfo.vetLocationName = values.vetLocationName;
    dog.vetInfo.address = values.address;
    this.props.dispatch(updateDogById(dog));
    this.props.history.push(`/vet-info/${dog.id}`);
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
          <label className="form-label" htmlFor="vetName">Vet Name</label>
          <Field component={Input} type="text" name="vetName" />
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

const mapStateToProps = state => ({
  initialValues: state.dog.currentDog
});

AddNewVetForm = reduxForm({
  form: 'add-new-vet',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('add-new-vet', Object.keys(errors)[0]))
})(AddNewVetForm)

export default withRouter(connect(mapStateToProps)(AddNewVetForm));

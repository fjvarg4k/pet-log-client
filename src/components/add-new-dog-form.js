import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { createNewDog } from '../actions/dog';
import Input from './input';
import { required, nonEmpty, isTrimmed } from '../validators';

export class AddNewDogForm extends React.Component {
  onSubmit(values) {
    const {name, breed, weight, age, gender} = values;
    const dog = {name, breed, weight, age, gender};
    return this.props
      .dispatch(createNewDog(dog))
  }

  render() {
    return (
      <form
        className="add-new-dog-form"
        onSubmit={this.props.handleSubmit(values =>
        this.onSubmit(values))}
      >
        <fieldset>
          <legend>Register New Pet</legend>
          <label className="form-label" htmlFor="name">Name</label>
          <Field component={Input} type="text" name="name" validate={[required, nonEmpty, isTrimmed]} />
          <label className="form-label" htmlFor="breed">Breed</label>
          <Field component={Input} type="text" name="breed" />
          <label className="form-label" htmlFor="weight">Weight</label>
          <Field component={Input} type="text" name="weight" />
          <label className="form-label" htmlFor="age">Age</label>
          <Field component={Input} type="text" name="age" />
          <div>
            <label className="form-label">Gender</label>
            <label><Field component={Input} type="radio" name="gender" value="male" validate={[required]} />Male</label>
            <label><Field component={Input} type="radio" name="gender" value="female" validate={[required]} />Female</label>
          </div>
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
  form: 'add-new-dog',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('add-new-dog', Object.keys(errors)[0]))
})(AddNewDogForm);

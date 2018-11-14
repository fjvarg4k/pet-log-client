import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/user';
import { login } from '../actions/auth';
import { required, nonEmpty, length, isTrimmed } from '../validators';
import Input from './input';

const usernameLengthRequirement = length({min: 4, max: 72});
const passwordLengthRequirement = length({min: 4, max: 72});
// const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {

  // When submitted, registers a new user using provided values
  onSubmit(values) {
    const {firstName, lastName, username, password} = values;
    const user = {firstName, lastName, username, password};
    return this.props
      .dispatch(registerUser(user))
      // If no errors, logs user in with provided username and password
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <form
        className="registration-form"
        onSubmit={this.props.handleSubmit(values =>
        this.onSubmit(values))}
      >
        <fieldset>
          <legend>Sign Up</legend>
          <label className="form-label" htmlFor="firstName">First Name</label>
          <Field component={Input} type="text" name="firstName" validate={[required, nonEmpty, isTrimmed]} />
          <label className="form-label" htmlFor="lastName">Last Name</label>
          <Field component={Input} type="text" name="lastName" validate={[required, nonEmpty, isTrimmed]} />
          <label className="form-label" htmlFor="username">Username</label>
          <Field component={Input} type="text" name="username" validate={[required, nonEmpty, isTrimmed, usernameLengthRequirement]} />
          <label className="form-label" htmlFor="password">Password</label>
          <Field component={Input} type="password" name="password" validate={[required, nonEmpty, isTrimmed, passwordLengthRequirement]} />
          <button
            className="form-button"
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
            >
              Register
            </button>
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);

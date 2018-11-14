import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import Input from './input';

export class LoginForm extends React.Component {

  // When submitted, logs user in with provided values
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }

    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values =>
        this.onSubmit(values))}
      >
        <fieldset>
          <legend>Log In</legend>
          <label className="form-label" htmlFor="username">Username</label>
          <Field component={Input} type="text" name="username" id="username" validate={[required, nonEmpty]} />
          <label className="form-label" htmlFor="password">Password</label>
          <Field component={Input} type="password" name="password" id="password" validate={[required, nonEmpty]} />
          <button
            className="form-button"
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
            >
              Log in
            </button>
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('login', Object.keys(errors)[0]))
})(LoginForm);

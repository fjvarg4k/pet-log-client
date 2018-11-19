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
        {error}
        <fieldset>
          <legend>Log In</legend>
          <div className="row form-group">
            <div className="col-3 form-label-container">
              <label className="form-label" htmlFor="username">Username</label>
            </div>
            <div className="col-6">
              <Field component={Input} type="text" name="username" id="username" validate={[required, nonEmpty]} />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-3 form-label-container">
              <label className="form-label" htmlFor="password">Password</label>
            </div>
            <div className="col-6">
              <Field component={Input} type="password" name="password" id="password" validate={[required, nonEmpty]} />
            </div>
          </div>
          <div className="form-button-container">
            <button
              className="form-button"
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
              >
                Log in
              </button>
          </div>
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

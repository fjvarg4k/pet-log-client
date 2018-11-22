import React from 'react';
import LoginForm from './login-form';
import { shallow } from 'enzyme';

describe('<LoginForm />', function() {
  it('Should render without crashing', function() {
    shallow(<LoginForm />);
  });
});

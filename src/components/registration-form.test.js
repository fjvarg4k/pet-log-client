import React from 'react';
import RegistrationForm from './registration-form';
import { shallow } from 'enzyme';

describe('<RegistrationForm />', function() {
  it('Should render without crashing', function() {
    shallow(<RegistrationForm />);
  });
});

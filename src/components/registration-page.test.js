import React from 'react';
import RegistrationPage from './registration-page';
import { shallow } from 'enzyme';
import store from '../store';

describe('<RegistrationPage />', function() {
  it('Should render without crashing', function() {
    shallow(<RegistrationPage store={store} />);
  });
});

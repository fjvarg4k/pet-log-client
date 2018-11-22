import React from 'react';
import LoginPage from './login-page';
import { shallow } from 'enzyme';
import store from '../store';

describe('<LoginPage />', function() {
  it('Should render without crashing', function() {
    shallow(<LoginPage store={store} />);
  });
});

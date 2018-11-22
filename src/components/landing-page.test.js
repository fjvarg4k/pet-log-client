import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './landing-page';
import store from '../store';

describe('<LandingPage />', function() {
  it('Should render without crashing', function() {
    shallow(<LandingPage store={store} />);
  });
});

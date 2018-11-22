import React from 'react';
import Dashboard from './dashboard';
import { shallow } from 'enzyme';
import store from '../store';

describe('<Dashboard />', function() {
  it('Should render without crashing', function() {
    shallow(<Dashboard store={store} />);
  });
});

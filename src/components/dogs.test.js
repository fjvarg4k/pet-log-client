import React from 'react';
import Dogs from './dogs';
import { shallow } from 'enzyme';
import store from '../store';

describe('<Dogs />', function() {
  it('Should render without crashing', function() {
    shallow(<Dogs store={store} />);
  });
});

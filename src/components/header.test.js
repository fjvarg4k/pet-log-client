import React from 'react';
import Header from './header';
import { shallow } from 'enzyme';
import store from '../store';

describe('<Header />', function() {
  it('Should render without crashing', function() {
    shallow(<Header store={store} />);
  });
});

import React from 'react';
import Footer from './footer';
import { shallow } from 'enzyme';

describe('<Footer />', function() {
  it('Should render without crashing', function() {
    shallow(<Footer />);
  });
});

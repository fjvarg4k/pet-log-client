import React from 'react';
import Dog from './dog';
import { shallow } from 'enzyme';

describe('<Dog />', function() {
  it('Should render without crashing', function() {
    shallow(<Dog />);
  });
});

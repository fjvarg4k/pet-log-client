import React from 'react';
import DogDetailsPage from './dog-details-page';
import { shallow } from 'enzyme';

describe('<DogDetailsPage />', function() {
  it('Should render without crashing', function() {
    shallow(<DogDetailsPage />);
  });
});

import React from 'react';
import EditDogDetailsPage from './edit-dog-details-page';
import { shallow } from 'enzyme';
import store from '../store';

describe('<EditDogDetailsPage />', function() {
  it('Should render without crashing', function() {
    shallow(<EditDogDetailsPage store={store} />);
  });
});

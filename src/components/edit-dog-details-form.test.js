import React from 'react';
import EditDogDetailsForm from './edit-dog-details-form';
import { shallow } from 'enzyme';

describe('<EditDogDetailsForm />', function() {
  it('Should render without crashing', function() {
    shallow(<EditDogDetailsForm />);
  });
});

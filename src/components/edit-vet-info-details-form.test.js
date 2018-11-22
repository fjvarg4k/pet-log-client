import React from 'react';
import EditVetInfoDetailsForm from './edit-vet-info-details-form';
import { shallow } from 'enzyme';

describe('<EditVetInfoDetailsForm />', function() {
  it('Should render without crashing', function() {
    shallow(<EditVetInfoDetailsForm />);
  });
});

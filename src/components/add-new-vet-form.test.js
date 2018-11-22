import React from 'react';
import AddNewVetForm from './add-new-vet-form';
import { shallow } from 'enzyme';

describe('<AddNewVetForm />', function() {
  it('Should render without crashing', function() {
    shallow(<AddNewVetForm />);
  });
});

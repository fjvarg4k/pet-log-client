import React from 'react';
import AddNewDogForm from './add-new-dog-form';
import { shallow } from 'enzyme';

describe('<AddNewDogForm />', function() {
  it('Should render without crashing', function() {
    shallow(<AddNewDogForm />);
  });
});

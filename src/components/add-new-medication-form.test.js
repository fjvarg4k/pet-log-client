import React from 'react';
import AddNewMedicationForm from './add-new-medication-form';
import { shallow } from 'enzyme';

describe('<AddNewMedicationForm />', function() {
  it('Should render without crashing', function() {
    shallow(<AddNewMedicationForm />);
  });
});

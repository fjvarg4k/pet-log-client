import React from 'react';
import EditMedicationDetailsForm from './edit-medication-details-form';
import { shallow } from 'enzyme';

describe('<EditMedicationDetailsForm />', function() {
  it('Should render without crashing', function() {
    shallow(<EditMedicationDetailsForm />);
  });
});

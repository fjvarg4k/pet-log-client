import React from 'react';
import DogMedicationPage from './dog-medication-page';
import { shallow } from 'enzyme';

describe('<DogMedicationPage />', function() {
  it('Should render without crashing', function() {
    shallow(<DogMedicationPage />);
  });
});

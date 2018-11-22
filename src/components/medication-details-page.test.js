import React from 'react';
import MedicationDetailsPage from './medication-details-page';
import { shallow } from 'enzyme';

describe('<MedicationDetailsPage />', function() {
  it('Should render without crashing', function() {
    shallow(<MedicationDetailsPage />);
  });
});

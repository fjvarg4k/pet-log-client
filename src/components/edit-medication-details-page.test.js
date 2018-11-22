import React from 'react';
import EditMedicationDetailsPage from './edit-medication-details-page';
import { shallow } from 'enzyme';
import store from '../store';

describe('<EditMedicationDetailsPage />', function() {
  it('Should render without crashing', function() {
    shallow(<EditMedicationDetailsPage store={store} />);
  });
});

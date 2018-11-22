import React from 'react';
import AddNewMedicationPage from './add-new-medication-page';
import { shallow } from 'enzyme';
import store from '../store';

describe('<AddNewMedicationPage />', function() {
  it('Should render without crashing', function() {
    shallow(<AddNewMedicationPage store={store} />);
  });
});

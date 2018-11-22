import React from 'react';
import AddNewVetPage from './add-new-vet-page';
import { shallow } from 'enzyme';
import store from '../store';

describe('<AddNewVetPage />', function() {
  it('Should render without crashing', function() {
    shallow(<AddNewVetPage store={store} />);
  });
});

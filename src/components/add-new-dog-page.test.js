import React from 'react';
import AddNewDogPage from './add-new-dog-page';
import { shallow } from 'enzyme';
import store from '../store';

describe('<AddNewDogPage />', function() {
  it('Should render without crashing', function() {
    shallow(<AddNewDogPage store={store} />);
  });
});

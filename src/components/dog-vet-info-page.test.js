import React from 'react';
import DogVetInfoPage from './dog-vet-info-page';
import { shallow } from 'enzyme';
import store from '../store';

describe('<DogVetInfoPage />', function() {
  it('Should render without crashing', function() {
    shallow(<DogVetInfoPage store={store} />);
  });
});

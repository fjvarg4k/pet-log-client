import React from 'react';
import EditVetInfoDetailsPage from './edit-vet-info-details-page';
import { shallow } from 'enzyme';
import store from '../store';

describe('<EditVetInfoDetailsPage />', function() {
  it('Should render without crashing', function() {
    shallow(<EditVetInfoDetailsPage store={store} />);
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App } from './App';

describe('<App />', function() {
  it('Should smoke test the App component', function() {
    shallow(<App dispatch={jest.fn} />)
  });
});

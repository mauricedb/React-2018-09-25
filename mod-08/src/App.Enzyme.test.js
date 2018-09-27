import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Ajax from './components/Ajax';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  wrapper.find(Ajax).dive();


//   wrapper.setState({})
});

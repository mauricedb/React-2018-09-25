import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('./components/Ajax.js', () => () => 'The ajax component');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // console.log(div.innerHTML);

  expect(div.innerHTML).toContain('The ajax component')
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('should render App perfectly', () => {
  const component = renderer.create(<App />);
  const domTree = component.toJSON();

  expect(domTree).toMatchSnapshot();
});

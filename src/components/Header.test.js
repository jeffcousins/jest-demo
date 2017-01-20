import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

it('should render the header', () => {
  const component = renderer
    .create(<Header />);

  const domTree = component.toJSON();

  expect(domTree).toMatchSnapshot();
})

import React from 'react';
import reactTestRenderer from 'react-test-renderer';

import MovieList from './MovieList';

test('compare the snapshot', () => {
  const tree = reactTestRenderer
    .create(<MovieList movies={[{ id: 1, title: 'Movie 1' }]} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

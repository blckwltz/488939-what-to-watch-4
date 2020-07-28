import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {UserBlock} from './user-block';

it(`Should render UserBlock component correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <UserBlock
            isAuthorized={true}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

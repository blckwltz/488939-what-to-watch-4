import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {authorizationStatus} from '../../__test-mocks__/user.js';
import {LoginScreen} from './login-screen';

const onSubmit = () => {};

it(`Should render LoginScreen component correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <LoginScreen
            authorizationStatus={authorizationStatus}
            onSubmit={onSubmit}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

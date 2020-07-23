import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {authorizationStatus} from '../../__test-mocks__/user.js';
import {LoginPage} from './login-page';

const onSubmit = () => {};
const onFocus = () => {};

it(`Should render LoginPage component correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <LoginPage
            authorizationStatus={authorizationStatus}
            loginStatus={200}
            onSubmit={onSubmit}
            onFocus={onFocus}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

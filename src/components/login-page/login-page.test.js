import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {LoginPage} from './login-page';

const onSubmit = () => {};
const onFocus = () => {};

it(`Should render LoginPage component correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <LoginPage
            isAuthorized={false}
            loginStatus={200}
            onSubmit={onSubmit}
            onFocus={onFocus}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

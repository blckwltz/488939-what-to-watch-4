import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {noop} from '../../__test-mocks__/noop';
import {LoginPage} from './login-page';

it(`Should render LoginPage component correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <LoginPage
            isAuthorized={false}
            loginStatus={200}
            onSubmit={noop}
            onFocus={noop}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

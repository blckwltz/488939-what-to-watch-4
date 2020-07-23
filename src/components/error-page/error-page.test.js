import React from 'react';
import renderer from 'react-test-renderer';
import {Status} from '../../utils/const.js';
import ErrorPage from './error-page';

it(`Should render ErrorPage component correctly`, () => {
  const tree = renderer
    .create(
        <ErrorPage
          status={Status.BAD_REQUEST}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router-dom';
import {noop} from '../../__test-mocks__/noop';
import {LoginPage} from './login-page';

configure({
  adapter: new Adapter(),
});

const onSubmit = jest.fn();

it(`Should render error message if login fails`, () => {
  const loginPage = mount(
      <MemoryRouter>
        <LoginPage
          isAuthorized={true}
          loginStatus={400}
          onSubmit={onSubmit}
          onFocus={noop}
        />
      </MemoryRouter>
  );
  const errorMessage = loginPage.find(`div.sign-in__message`);

  expect(errorMessage.length).toBe(1);
});

it(`Should pass correct data on form submit`, () => {
  const loginPage = mount(
      <MemoryRouter>
        <LoginPage
          isAuthorized={true}
          loginStatus={400}
          onSubmit={onSubmit}
          onFocus={noop}
        />
      </MemoryRouter>
  );
  const loginForm = loginPage.find(`form.sign-in__form`);
  const emailField = loginPage.find(`input#user-email`);
  const passwordField = loginPage.find(`input#user-password`);

  emailField.instance().value = `name@email.com`;
  passwordField.instance().value = `12345`;
  loginForm.simulate(`submit`);
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({login: `name@email.com`, password: `12345`});
});

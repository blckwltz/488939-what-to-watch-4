import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router-dom';
import {authorizationStatus} from '../../__test-mocks__/user.js';
import {LoginScreen} from './login-screen';

configure({
  adapter: new Adapter(),
});

const onSubmit = jest.fn();
const onFocus = () => {};

it(`Should render error message if login fails`, () => {
  const loginScreen = mount(
      <MemoryRouter>
        <LoginScreen
          authorizationStatus={authorizationStatus}
          loginStatus={400}
          onSubmit={onSubmit}
          onFocus={onFocus}
        />
      </MemoryRouter>
  );
  const errorMessage = loginScreen.find(`div.sign-in__message`);

  expect(errorMessage.length).toBe(1);
});

it(`Should pass correct data on form submit`, () => {
  const loginScreen = mount(
      <MemoryRouter>
        <LoginScreen
          authorizationStatus={authorizationStatus}
          loginStatus={400}
          onSubmit={onSubmit}
          onFocus={onFocus}
        />
      </MemoryRouter>
  );
  const loginForm = loginScreen.find(`form.sign-in__form`);
  const emailField = loginScreen.find(`input#user-email`);
  const passwordField = loginScreen.find(`input#user-password`);

  emailField.instance().value = `name@email.com`;
  passwordField.instance().value = `12345`;
  loginForm.simulate(`submit`);
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({login: `name@email.com`, password: `12345`});
});

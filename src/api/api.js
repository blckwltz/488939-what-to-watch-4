import axios from 'axios';
import {BASE_URL, URL, TIMEOUT, Status} from '../utils/const.js';
import history from '../routing/history.js';
import {AppRoute} from '../routing/route.js';

export const createAPI = (onUnauthorized, onError, onServerError) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT * 1000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {config, response} = err;
    const {url, method} = config;

    switch (response.status) {
      case Status.UNAUTHORIZED:
        if (url !== URL.LOGIN && method !== `get`) {
          history.push(AppRoute.LOGIN);
        }

        onUnauthorized();
        throw err;
      case Status.ERROR:
        onError();
        break;
      case Status.SERVER_ERROR:
        onServerError();
        break;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

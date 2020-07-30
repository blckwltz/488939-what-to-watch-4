import axios from 'axios';
import {BASE_URL, URL, TIMEOUT, Status} from '../utils/const';
import history from '../routing/history';
import {AppRoute} from '../routing/route';

export const createAPI = (onUnauthorized, onError, onLoginError, onReviewError, onServerError) => {
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
    const {status} = response;

    switch (response.status) {
      case Status.UNAUTHORIZED:
        if (url !== URL.LOGIN && method !== `get`) {
          history.push(AppRoute.LOGIN);
        }

        onUnauthorized();
        throw err;
      case Status.BAD_REQUEST:
        if (url === URL.LOGIN && method === `post`) {
          onLoginError(status);
          throw err;
        }

        if (url.includes(URL.REVIEWS) && method === `post`) {
          onReviewError(status);
          throw err;
        }

        onError(status);
        break;
      case Status.SERVER_ERROR:
        if (url === URL.LOGIN && method === `post`) {
          onLoginError(status);
          throw err;
        }

        onServerError();
        break;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

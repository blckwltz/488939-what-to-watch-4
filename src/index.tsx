import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Operation as MoviesOperation} from './store/movies/movies';
import {Operation as UserOperation} from './store/user/user';
import store from './store/store';
import App from './components/app/app';

const rootElement = document.querySelector(`#root`);

store.dispatch(MoviesOperation.loadFeaturedMovie());
store.dispatch(MoviesOperation.loadMovies());
store.dispatch(UserOperation.checkAuth());
ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    rootElement
);

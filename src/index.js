import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Operation as MoviesOperation} from './reducer/movies/movies.js';
import {Operation as UserOperation} from './reducer/user/user.js';
import store from './reducer/store.js';
import App from './components/app/app.jsx';

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

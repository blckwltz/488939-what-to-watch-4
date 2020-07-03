import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer.js';
import App from './components/app/app.jsx';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);
const rootElement = document.querySelector(`#root`);

ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    rootElement
);

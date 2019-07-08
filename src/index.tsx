import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducers from './reducers';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(logger),
);

ReactDOM.render(
  <Provider store={store}>
    <div>Hello World</div>
  </Provider>,
  document.getElementById('root'),
);

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History, createBrowserHistory } from 'history';
import { createStore } from './store';
import { ChannelList, Channel } from './containers';


const history :History = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ChannelList />
      <Channel />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

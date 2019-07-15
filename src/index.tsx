import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History, createBrowserHistory } from 'history';
import { createStore } from './store';
import { ChannelList, MessageFeed } from './containers';
import { Channel } from './containers';

const history :History = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ChannelList />
      <main style={{ margin: '1rem 0 1rem 17rem' }}>
        <Channel />
      </main>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

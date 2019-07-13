import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History, createBrowserHistory } from 'history';
import { Switch, Route } from 'react-router';
import { createStore } from './store';
import { ChannelList } from './containers';
import { MessageFeed } from './components';

const history :History = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ChannelList />
      <main style={{ margin: '1rem 0 1rem 17rem' }}>
        <Switch>
          <Route exact path="/channels/" render={() => <h2>Home</h2>} />
          <Route exact path="/channels/:channelName" render={() => <h2>{store.getState().channels.currentChannel}</h2>} />
        </Switch>
        <MessageFeed />
      </main>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

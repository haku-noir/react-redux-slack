import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History, createBrowserHistory } from 'history';
import { createStore } from './store';
import { Switch, Route } from 'react-router';
import {ChannelList} from './containers';

const history :History = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ChannelList/>
      <main style={{margin: '1rem 0 1rem 17rem'}}>
        <Switch>
          <Route exact path="/" render={() => <h2>Home</h2>} />
          <Route exact path="/channels/:channelName" render={() => <h2>{store.getState().channels.currentPath.split('/')[2]}</h2>} />
        </Switch>
      </main>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

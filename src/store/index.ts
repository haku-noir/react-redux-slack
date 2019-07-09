import {
  createStore as reduxCreateStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import { History } from 'history';
import logger from 'redux-logger';
import { channelsReducer, ChannelsState } from '../reducers';

export type RootState = {
  channels: ChannelsState,
  router: RouterState
}

export function createStore(history :History) {
  const rootReducer = combineReducers<RootState>({
    channels: channelsReducer,
    router: connectRouter(history),
  });

  return reduxCreateStore(
    rootReducer,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        logger,
      ),
    ),
  );
}

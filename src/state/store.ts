import {
  createStore as reduxCreateStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import { History } from 'history';
import logger from 'redux-logger';
import { channelsReducer, IChannelsState } from './ducks';

export type IAppState = {
  channels: IChannelsState,
  router: RouterState
}

export function createStore(history :History) {
  const rootReducer = combineReducers<IAppState>({
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

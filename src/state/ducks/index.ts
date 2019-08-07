import { combineReducers } from 'redux';
import channelsReducer, { IChannelsState } from './channels';

export interface IAppState {
  channels: IChannelsState
}

export const reducers = combineReducers<IAppState>({ channels: channelsReducer });

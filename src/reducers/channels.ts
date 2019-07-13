import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { channelsActions } from '../actions';

export interface ChannelsState {
  channels: Array<string>;
  currentChannel: string;
}

const initialState: ChannelsState = {
  channels: ['general', 'random'],
  currentChannel: '',
};

const channelsReducer = reducerWithInitialState(initialState)
  .case(channelsActions.switchChannel, (state :ChannelsState, payload: string) => ({
    ...state,
    currentChannel: payload,
  }));

export default channelsReducer;

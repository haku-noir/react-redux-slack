import { reducerWithInitialState } from 'typescript-fsa-reducers';
import actions from './actions';

export interface IChannelsState {
  channels: Array<string>;
  currentChannel: string;
}

const initialState: IChannelsState = {
  channels: ['general', 'random'],
  currentChannel: '',
};

const reducers = reducerWithInitialState(initialState)
  .case(actions.switchChannel, (state: IChannelsState, payload: string) => ({
    ...state,
    currentChannel: payload,
  }));

export default reducers;

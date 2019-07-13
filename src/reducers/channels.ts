import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { channelsActions } from '../actions';
import { Message } from '../clients';

export interface ChannelsState {
  channels: Array<string>;
  currentChannel: string;
  messages: Message[];
}

const initialState: ChannelsState = {
  channels: ['general', 'random'],
  currentChannel: '',
  messages: [{
    id: '',
    body: 'Hello',
    user: {
      id: '',
      name: '',
      avatar: '',
    },
    date: '',
  }, {
    id: '',
    body: 'World',
    user: {
      id: '',
      name: '',
      avatar: '',
    },
    date: '',
  }],
};

const channelsReducer = reducerWithInitialState(initialState)
  .case(channelsActions.switchChannel, (state: ChannelsState, payload: string) => ({
    ...state,
    currentChannel: payload,
  }));

export default channelsReducer;

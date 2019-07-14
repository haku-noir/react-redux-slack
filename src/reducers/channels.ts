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
    id: '0',
    body: 'Hello',
    user: {
      id: '',
      name: '',
      avatar: '',
    },
    date: '',
  }, {
    id: '1',
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
  }))
  .case(channelsActions.updateMessages, (state: ChannelsState, payload: Message[]) => ({
    ...state,
    messages: payload
  }));

export default channelsReducer;

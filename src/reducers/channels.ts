import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { channelsActions } from '../actions';
import { push } from 'connected-react-router';

export interface ChannelsState {
  channels: Array<string>;
  currentPath: string;
}

const initialState: ChannelsState = {
  channels: ['general', 'random'],
  currentPath: '/',
};

const channelsReducer = reducerWithInitialState(initialState)
  .case(channelsActions.switchPath, (state :ChannelsState, payload: string) => {
    console.log(push("payload"));
    return ({
      ...state,
      currentPath: payload,
    });
  });

export default channelsReducer;

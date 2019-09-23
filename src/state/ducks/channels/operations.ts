import { Dispatch } from 'redux';
import actions from './actions';

const operations = {
  switchAndRedirectChannel: (dispatch: Dispatch, channelName: string) => {
    dispatch(actions.redirectPath(`/channels/${channelName}`));
    dispatch(actions.switchChannel(channelName));
  },
  updateChannels: (dispatch: Dispatch, channels: string[]) => {
    dispatch(actions.updateChannels(channels));
  },
};

export default operations;

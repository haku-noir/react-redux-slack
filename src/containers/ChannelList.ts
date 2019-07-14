import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ChannelsState } from '../reducers';
import { AppState } from '../store';
import { channelsActions } from '../actions';
import { ChannelList } from '../components';

const mapStateToProps = (appState: AppState): ChannelsState => (
  appState.channels
);

export interface ChannelsDispatch {
  switchAndRedirectChannel: (channelName: string) => void,
  updateChannels: (channels: string[]) => void
}

const mapDispatchToProps = (dispatch: Dispatch): ChannelsDispatch => ({
  switchAndRedirectChannel: (channelName: string) => {
    dispatch(channelsActions.redirectPath(`/channels/${channelName}`));
    dispatch(channelsActions.switchChannel(channelName));
  },
  updateChannels: (channels: string[]) => {
    dispatch(channelsActions.updateChannels(channels));
  }
});

const connectedChannelList = connect(mapStateToProps, mapDispatchToProps)(ChannelList);

export default connectedChannelList;

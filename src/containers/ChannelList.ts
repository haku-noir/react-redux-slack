import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ChannelsState } from '../reducers';
import { AppState } from '../store';
import { channelsActions } from '../actions';
import { ChannelList } from '../components';

export interface ChannelsDispatch {
  switchAndRedirectChannel: (channelName: string) => void
}

const mapStateToProps = (appState: AppState): ChannelsState => (
  appState.channels
);

const mapDispatchToProps = (dispatch: Dispatch): ChannelsDispatch => ({
  switchAndRedirectChannel: (channelName: string) => {
    dispatch(channelsActions.redirectPath(channelName));
    dispatch(channelsActions.switchPath(channelName));
  },
});

const connectedChannelList = connect(mapStateToProps, mapDispatchToProps)(ChannelList);

export default connectedChannelList;

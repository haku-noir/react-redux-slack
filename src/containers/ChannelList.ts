import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { channelsActions } from '../actions/';
import { ChannelList } from '../components/';
import { ChannelsState } from 'reducers';
import { push, Push, CallHistoryMethodAction } from 'connected-react-router';

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
  }
});

const connectedChannelList = connect(mapStateToProps, mapDispatchToProps)(ChannelList);

export default connectedChannelList;

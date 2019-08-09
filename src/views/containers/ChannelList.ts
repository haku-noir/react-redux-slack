import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IAppState } from '../../state/store';
import { channelsOperations, channelsSelectors } from '../../state/ducks/channels';
import ChannelList from '../components/ChannelList';

const mapStateToProps = (state: IAppState) => (
  channelsSelectors.getChannelsState(state)
);

export interface IChannelListDispatch {
  clickChannel: (channelName: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): IChannelListDispatch => ({
  clickChannel: (channelName: string) => {
    channelsOperations.switchAndRedirectChannel(dispatch, `/channels/${channelName}`);
  },
});

const connectedChannelList = connect(mapStateToProps, mapDispatchToProps)(ChannelList);

export default connectedChannelList;

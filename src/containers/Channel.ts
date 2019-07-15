import { connect } from 'react-redux';
import { ChannelsState } from '../reducers';
import { AppState } from '../store';
import { Channel } from '../components';

const mapStateToProps = (appState: AppState): ChannelsState => (
  appState.channels
);

const connectedChannel = connect(mapStateToProps)(Channel);

export default connectedChannel;

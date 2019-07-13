import { connect } from 'react-redux';
import { ChannelsState } from '../reducers';
import { AppState } from '../store';
import { MessageFeed } from '../components';

const mapStateToProps = (appState: AppState): ChannelsState => (
  appState.channels
);

const mapDispatchToProps = () => ({});

const connectedMessageFeed = connect(mapStateToProps, mapDispatchToProps)(MessageFeed);

export default connectedMessageFeed;

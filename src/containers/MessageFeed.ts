import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ChannelsState } from '../reducers';
import { AppState } from '../store';
import { channelsActions } from '../actions';
import { MessageFeed } from '../components';
import { Message } from '../clients';

const mapStateToProps = (appState: AppState): ChannelsState => (
  appState.channels
);

export interface MessagesDispatch {
  updateMessages: (messages: Message[]) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MessagesDispatch => ({
  updateMessages: (messages: Message[]) => {
    dispatch(channelsActions.updateMessages(messages));
  },
});

const connectedMessageFeed = connect(mapStateToProps, mapDispatchToProps)(MessageFeed);

export default connectedMessageFeed;

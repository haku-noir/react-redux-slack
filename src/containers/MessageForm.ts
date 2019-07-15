import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ChannelsState } from '../reducers';
import { AppState } from '../store';
import { channelsActions } from '../actions';
import { MessageForm } from '../components';
import { Message } from '../clients';

const mapStateToProps = (appState: AppState): ChannelsState => (
  appState.channels
);

export interface MessageFormDispatch {
  updateMessages: (messages: Message[]) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MessageFormDispatch => ({
  updateMessages: (messages: Message[]) => {
    dispatch(channelsActions.updateMessages(messages));
  },
});

const connectedMessageForm = connect(mapStateToProps, mapDispatchToProps)(MessageForm);

export default connectedMessageForm;

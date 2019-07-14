import actionCreatorFactory from 'typescript-fsa';
import { push } from 'connected-react-router';
import { Message } from '../clients';

const actionCreator = actionCreatorFactory();

export const channelsActions = {
  switchChannel: actionCreator<string>('SWITCH_CHANNEL'),
  redirectPath: (payload: string) => push(payload),
  updateMessages: actionCreator<Message[]>('UPDATE_MESSAGE'),
  updateChannels: actionCreator<string[]>('UPDATE_CHANNELS')
};

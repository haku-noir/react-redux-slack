import actionCreatorFactory from 'typescript-fsa';
import { push } from 'connected-react-router';

const actionCreator = actionCreatorFactory();

const actions = {
  switchChannel: actionCreator<string>('SWITCH_CHANNEL'),
  redirectPath: (payload: string) => push(payload),
  updateChannels: actionCreator<string[]>('UPDATE_CHANNELS'),
};

export default actions;

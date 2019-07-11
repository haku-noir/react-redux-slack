import actionCreatorFactory from 'typescript-fsa';
import { push } from 'connected-react-router';

const actionCreator = actionCreatorFactory();

export const channelsActions = {
  switchPath: actionCreator<string>('SWITCH_CHANNEL'),
  redirectPath: (payload: string) => push(payload)
};

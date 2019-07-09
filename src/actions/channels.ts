import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

const channelsActions = {
  switchChannel: actionCreator<string>('SWITCH_CHANNEL'),
};

export default channelsActions;

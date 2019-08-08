import { IAppState } from '../../store';

const selectors = {
  getChannelsState: (state: IAppState) => state.channels
};

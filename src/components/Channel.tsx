import * as React from 'react';
import { ChannelsState } from '../reducers';
import { MessageFeed } from '../containers';

type IProps = ChannelsState;

const Channel: React.SFC<IProps> = (props: IProps) => (
  <div>
    <h2>{props.currentChannel || "Home"}</h2>
    <MessageFeed />
  </div>
);

export default Channel;

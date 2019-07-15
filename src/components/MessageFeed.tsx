import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {
  List, ListItem, ListItemAvatar, Avatar,
  ListItemText, Typography, Divider,
} from '@material-ui/core';
import { ChannelsState } from '../reducers';
import { MessageFeedDispatch } from '../containers';
import { fetchMessages } from '../clients';

export const messageWidth = 1000;

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: messageWidth,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

type IProps = ChannelsState & MessageFeedDispatch;

const MessageFeed: React.SFC<IProps> = (props: IProps) => {
  const { currentChannel, messages, updateMessages } = props;

  const classes = useStyles(ThemeProvider);

  React.useEffect(() => {
    fetchMessages(currentChannel)
      .then((res) => {
        updateMessages(res.data.messages);
      });
  });

  return (
    <div className={classes.root}>
      <List>
        {messages.map(message => (
          <div key={message.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Avatar" src={message.user.avatar || ''} />
              </ListItemAvatar>
              <ListItemText
                primary={message.user.name || 'Anonymous'}
                secondary={(
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {message.body || 'Hello World'}
                    </Typography>
                  </React.Fragment>
                )}
                key={message.id}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    </div>
  );
};

export default MessageFeed;

import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import { MessagesDispatch } from '../containers';
import { ChannelsState } from '../reducers';
import { fetchMessages } from '../clients';

const messageWidth = 1000;

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: messageWidth,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

type IProps = ChannelsState & MessagesDispatch;

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

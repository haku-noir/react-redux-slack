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
import { ChannelsState } from '../reducers';

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

type IProps = ChannelsState;

const MessageFeed: React.SFC<IProps> = (props: IProps) => {
  const { messages } = props;

  const classes = useStyles(ThemeProvider);

  return (
    <div className={classes.root}>
      <List>
        {messages.map(message => (
          <div>
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

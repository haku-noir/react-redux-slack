import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, TextField } from '@material-ui/core';
import { messageWidth } from './MessageFeed';
import { ChannelsState } from '../reducers';
import { MessageFormDispatch } from '../containers';
import {
  Message, User, sendMessage, fetchMessages,
} from '../clients';

const useStyles = makeStyles(() => ({
  root: {
    width: messageWidth,
    display: 'flex',
    flexGrow: 1,
  },
  textfield: {
    width: messageWidth * 10 / 12,
    height: 48,
    '& label.Mui-focused': {
      color: 'blue',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'blue',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'blue',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'blue',
      },
    },
  },
  button: {
    width: messageWidth * 1 / 12,
    height: 48,
    margin: 8,
    background: 'linear-gradient(45deg, #21CBF3 0%, #21CBF3 100%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
  },
}));

const createMessage = (id: string, body: string): Message => {
  const user: User = {
    id: 'you',
    name: 'You',
    avatar: '',
  };
  const date = new Date();
  return ({
    id,
    body,
    user,
    date: `${date.toJSON()}`,
  });
};

type IProps = ChannelsState & MessageFormDispatch;

const MessageForm: React.SFC<IProps> = (props: IProps) => {
  const { currentChannel, messages, updateMessages } = props;

  const classes = useStyles({});
  const [message, updateMessage] = React.useState('');

  return (
    <Grid container className={classes.root}>
      <Grid item xs={10}>
        <TextField
          className={classes.textfield}
          label="Message"
          variant="outlined"
          onChange={(event) => { updateMessage(String(event.target.value)); }}
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          className={classes.button}
          onClick={() => {
            sendMessage(
              currentChannel,
              createMessage(String(messages.length + 1), message),
            ).then(() => {
              fetchMessages(currentChannel)
                .then((res) => {
                  updateMessages(res.data.messages);
                });
            });
          }}
        >
        Send
        </Button>
      </Grid>
    </Grid>
  );
};

export default MessageForm;

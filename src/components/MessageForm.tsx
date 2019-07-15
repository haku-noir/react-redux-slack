import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Button, Grid, TextField } from '@material-ui/core';
import { messageWidth } from './MessageFeed';

const useStyles = makeStyles((theme: Theme) => ({
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

const MessageForm = () => {
  const classes = useStyles(ThemeProvider);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={10}>
      <TextField
        className={classes.textfield}
        label="Custom CSS"
        variant="outlined"
        id="custom-css-outlined-input"
      />
      </Grid>
      <Grid item xs={2}>
        <Button className={classes.button}>Send</Button>
      </Grid>
    </Grid>
  );
}

export default MessageForm;

import * as React from 'react';
import {
  makeStyles, Theme, createStyles,
} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { ChannelsState } from '../reducers';
import { MessageFeed } from '../containers';
import { drawerWidth } from './ChannelList';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginLeft: drawerWidth,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

type IProps = ChannelsState;

const Channel: React.SFC<IProps> = (props: IProps) => {
  const classes = useStyles(ThemeProvider);
  const { currentChannel } = props;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {currentChannel || 'Home'}
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <MessageFeed />
      </main>
    </div>
  );
};
export default Channel;

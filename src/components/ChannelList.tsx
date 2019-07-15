import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import HOMEIcon from '@material-ui/icons/Home';
import { ThemeProvider } from '@material-ui/styles';
import {
  Drawer, CssBaseline, List, ListItem, ListItemText, ListItemIcon,
  Divider, ListItemSecondaryAction, IconButton, Collapse,
} from '@material-ui/core';
import { fetchChannels } from '../clients';
import { ChannelsState } from '../reducers';
import { ChannelListDispatch } from '../containers';

export const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

type IProps = ChannelsState & ChannelListDispatch;

const ChannelList: React.SFC<IProps> = (props: IProps) => {
  const { channels, switchAndRedirectChannel, updateChannels } = props;

  const classes = useStyles(ThemeProvider);
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    fetchChannels()
      .then((res) => {
        updateChannels(res.data.channels);
      });
  });

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List>
          <ListItem button onClick={() => { switchAndRedirectChannel(''); }}>
            <ListItemIcon>
              <HOMEIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => { setOpen(!open); }}>
            <ListItemText primary="Channels" />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <AddIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {channels.map(channelName => (
                <ListItem
                  button
                  onClick={() => { switchAndRedirectChannel(channelName); }}
                  className={classes.nested}
                  key={channelName}
                >
                  <ListItemText primary={`# ${channelName}`} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </Drawer>
    </div>
  );
};

export default ChannelList;

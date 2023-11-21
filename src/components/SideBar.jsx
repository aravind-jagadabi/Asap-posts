import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Domains from '../remotedata/Domains';

export default function SideBar({setDomain}) {
  const [state, setState] = React.useState({
    left: false
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 210 , paddingLeft: '10px', paddingRight: '10px'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          Categories
        </ListItem>
      </List>
      <Divider />
      <List>
        {Domains.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick = {() => setDomain(text)} style={{height:50}}>
              <ListItemText primary={text} style={{textTransform: 'capitalize'}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={darkTheme}>
    <div>
      <React.Fragment key={'left'}>
        <IconButton onClick={toggleDrawer('left', true)}><MenuIcon style = {{color: 'black', fontSize: '30px'}}/></IconButton>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
      
    </div>
    </ThemeProvider>
  );
}
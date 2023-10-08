import React, { useState } from 'react';
import { Badge, Divider, IconButton, List, ThemeProvider, Toolbar,Box, Typography, Hidden, AppBarProps as MuiAppBarProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Image = styled('img')({
  maxWidth: '100%',
  maxHeight: '50px',
  height: 'auto',
  borderRadius: '8px', 
});

interface SideBarProps {
  pageName: string;
}

const SideBar: React.FC<SideBarProps> = ({ pageName }) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      <AppBar position="absolute" open={open}>
        <Toolbar sx={{ pr: '24px' }}>
          <Hidden smDown>
            <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer} sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            {pageName}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Hidden smDown>
        <Drawer variant="permanent" open={open}>
          
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
            <Box>
          <Image src={require(`../static/logo.png`)} alt="Logo" />
          </Box>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
      </Hidden>
    </>
  );
};

export default SideBar;
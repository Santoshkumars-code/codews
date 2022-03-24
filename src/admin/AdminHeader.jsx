import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
//import {Grid, Item} from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const AdminHeader = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar color="secondary" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Pannel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bg:"dark",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{backgroundColor:"#7608a8"}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
       
         <List color="inherit" sx={{backgroundColor:"#7608a8"}}>
         <Button component={Link} to="/adminhome" sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
         <Button component={Link} to="/managestudent" sx={{ my: 2, color: 'white', display: 'block' }}>Manage Student</Button>
         <Button component={Link} to="/managefee" sx={{ my: 2, color: 'white', display: 'block' }}>Manage Fee</Button>
         <Button component={Link} to="/managecourses" sx={{ my: 2, color: 'white', display: 'block' }}>Manage Courses</Button>
         <Button component={Link} to="/placement" sx={{ my: 2, color: 'white', display: 'block' }}>Placement</Button>
         <Button component={Link} to="/login" sx={{ my: 2, color: 'white', display: 'block' }}>Logout</Button>
         
        </List> 
        <Divider />
    
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {/* <Box
           sx={{
            width: "100%",
            height: "80vh",
            backgroundColor: '#efefef',
          }}
        >
            <Grid container spacing={2}>
             <Grid item xs={4}>
               <Paper sx={{
            width: "90%",
            height: "50vh",
            backgroundColor: '#c9026c',
            marginLeft:"5%",
          }}>
                 <h1>hello</h1>
              </Paper>
           </Grid>
           <Grid item xs={4}>
               <Paper sx={{
            width: "90%",
            height: "50vh",
            backgroundColor: '#9cf700',
            marginLeft:"5%",
          }}
               >
                 <h1>hello</h1>
              </Paper>
           </Grid>
           <Grid item xs={4}>
               <Paper
               sx={{
                width: "90%",
                height: "50vh",
                backgroundColor: '#00f7df',
                marginLeft:"5%",
              }}>
                 <h1>hello</h1>
              </Paper>
           </Grid>
          </Grid>

        </Box> */}
    
      </Main>
    </Box>
  );
}
export default AdminHeader;
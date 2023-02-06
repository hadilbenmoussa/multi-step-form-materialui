
import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import {ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



const theme = createTheme({
  palette: {
    primary: {
      main: '#1476A3',
    },
    secondary: {
      main: '#292977',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: '12px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: 120,
          height: 50,
      
        },
      },
    },
  },
})

export class Success extends Component {
   
   
    
  render() {

    return (
      
      <ThemeProvider theme={theme}>
       <React.Fragment>
       <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography  variant="h6" color="inherit" component="div" align="center">
           Success
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <h1>Thanks for your submission </h1>
    <p> you will get an email with further instructions</p>



    </React.Fragment>
    </ThemeProvider>);}}
       

export default Success

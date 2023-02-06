
import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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

export class FormUserDetails extends Component {
    continue = (e)=>{
        e.preventDefault();
        this.props.nextStep();
    }
    
  render() {
    const {values, handleChange}= this.props;
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
            Enter User Details 
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <br/>
    <TextField
    placeholder="Enter Your Name"
    label="First Name"
    onChange={handleChange('firstName')} defaultValue={values.firstName}/>
    <br/><br/>
    <TextField
    placeholder="Enter Your LastName"
    label="Last Name"
    onChange={handleChange('lastName')} defaultValue={values.lastName}/>
    <br/><br/>
    <TextField
    placeholder="Enter Your Email"
    label="Email"
    onChange={handleChange('email')} defaultValue={values.email}/>
    <br/><br/>

   <Button 
    variant="contained"
    sx={{
    borderRadius: 1
    }}
    primary={"true"}
    onClick={this.continue}>Continue</Button>
  



    </React.Fragment>
    </ThemeProvider>
       

    )
  }
}

export default FormUserDetails

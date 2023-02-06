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


/**                        styling                    */
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
          width: 110,
          height: 50,
      
        },
      },
    },
  },
})




export class FormPersonalUserDetails extends Component {
    continue = (e)=>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e)=>{
        e.preventDefault();
        this.props.prevStep();
    }
    
  render() {
    const {values, handleChange}= this.props;
    return (
      <div>
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
    placeholder="Enter Your Occupation"
    label="Occupation"
    onChange={handleChange('occupation')} defaultValue={values.occupation}/>
    <br/><br/>
    <TextField
    placeholder="Enter Your City"
    label="City"
    onChange={handleChange('city')} defaultValue={values.city}/>
    <br/><br/>
    <TextField
    placeholder="Enter your Bio"
    label="Bio"
    onChange={handleChange('bio')} defaultValue={values.bio}/>
    <br/><br/>

   <Button 
    variant="contained"
    sx={{
    borderRadius: 1,
    width:110,
    mx: "1%"
    }}
    primary={"true"}
    onClick={this.continue}>Continue</Button>
    <Button 
    variant="outlined"
    sx={{
    borderRadius: 1,
    width:90
    }}
    primary={"false"}
    onClick={this.back}>Back</Button>
  



    </React.Fragment>
    </ThemeProvider>
       
      </div>
    )
  }
}

export default FormPersonalUserDetails

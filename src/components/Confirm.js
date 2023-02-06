
import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';
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
          width: 200,
          height: 50,
      
        },
      },
    },
  },
})

export class Confirm extends Component {
    continue = (e)=>{
        // Process Form //
        e.preventDefault();
        this.props.nextStep();
    }
    back =(e)=>{
      e.preventDefault();
      this.props.prevStep();
    }
    
  render() {
    const {values :{firstName, lastName,email,occupation,city,bio}}= this.props;
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
            Confirm User Details
          </Typography>
        </Toolbar>
      </AppBar>
<Container maxWidth="md">

    <List sx={{px:20}}>
     <ListItem>
      <ListItemButton>
      <ListItemText primary="First Name" secondary={firstName}/>
      </ListItemButton>
     </ListItem>
          <ListItem>
      <ListItemButton>
      <ListItemText primary="Last Name" secondary={lastName}/>
      </ListItemButton>
     </ListItem>
          <ListItem>
      <ListItemButton>
      <ListItemText primary="Email" secondary={email}/>
      </ListItemButton>
     </ListItem>
          <ListItem>
      <ListItemButton>
      <ListItemText primary="Occupation" secondary={occupation}/>
      </ListItemButton>
     </ListItem>
          <ListItem>
      <ListItemButton>
      <ListItemText primary="City" secondary={city}/>
      </ListItemButton>
     </ListItem>
          <ListItem>
      <ListItemButton>
      <ListItemText primary="Bio" secondary={bio}/>
      </ListItemButton>
     </ListItem>
     </List>
       
   <Button 
    variant="contained"
    sx={{
    mx:2,
    width :250, 
    borderRadius: 1
    }}
    primary={"true"}
    onClick={this.continue}>Confirm & Continue</Button>
  <Button 
    variant="outlined"
    sx={{
    width:200,
    borderRadius: 1
    }}
    primary={"false"}
    onClick={this.back}>Back</Button>


    <br/>
    </Container>
    
</Box>  
 </React.Fragment>
    </ThemeProvider>
    </div>
    )
  }
}

export default Confirm
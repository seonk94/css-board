import { AppBar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import { AccountCircle, EventNote, Home } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root : {
    position : 'sticky',
    top : 0
  },
  page : {
    fontWeight : 700,
    cursor : 'pointer',
    marginRight : '12px',
    '&:hover' : {
      color : '#bbb'
    }
  }
});

function Appbar() {
  const classes = useStyles();
  const history = useHistory();

  const handleIconClick = (route : string) => {
    history.push(`/${route}`);
  };

  return (
    <AppBar className={classes.root}>
      <Toolbar>        
        <div style={{ flexGrow : 1 }}/>
        <IconButton 
          onClick={() => handleIconClick('')}
          color="secondary"
        >
          <Home/>            
        </IconButton>
        <IconButton 
          onClick={() => handleIconClick('create')}
          color="secondary"
        >
          <EventNote/>            
        </IconButton>
        <IconButton 
          onClick={() => handleIconClick('setting')}
          color="secondary"
        >
          <AccountCircle/>            
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default Appbar;
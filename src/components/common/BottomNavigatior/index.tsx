import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import { AccountCircle, Home } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root : {
    position : 'fixed',
    bottom : 0,
    width : '100%'
  }
});

function BottomNavigator() {
  const classes = useStyles();
  const history = useHistory();

  const handleClickMenu = (label : string) => {
    switch(label) {
    case 'Home': return history.push('/'); 
    case 'Setting': return history.push('/setting');
    }
  };

  return <BottomNavigation className={classes.root}>
    <BottomNavigationAction 
      label="Home"
      onClick={() => handleClickMenu('Home')}
      icon={<Home />} />
    <BottomNavigationAction 
      label="Setting"
      onClick={() => handleClickMenu('Setting')}
      icon={<AccountCircle />} />
  </BottomNavigation>;
}
export default BottomNavigator;
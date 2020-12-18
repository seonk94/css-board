import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import { AccountCircle, EventNote, Home } from '@material-ui/icons';
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
    history.push(`/${label}`);
  };

  return <BottomNavigation className={classes.root}>
    <BottomNavigationAction 
      onClick={() => handleClickMenu('')}
      icon={<Home />} />
    <BottomNavigationAction 
      onClick={() => handleClickMenu('create')}
      icon={<EventNote />} />
    <BottomNavigationAction 
      onClick={() => handleClickMenu('setting')}
      icon={<AccountCircle />} />
  </BottomNavigation>;
}
export default BottomNavigator;
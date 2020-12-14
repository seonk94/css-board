import { AppBar, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { AccountCircle, Home } from '@material-ui/icons';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { firebaseAuth } from 'src/provider/AuthProvider';

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { user, signOut } = useContext(firebaseAuth);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLoginMenuClick = (item : React.MouseEvent<HTMLElement>) => {
    if (user) {
      signOut();
    } else {
      history.push('/login');
      handleClose();
    }
  };

  const handleIconClick = (route : string) => {
    history.push(`/${route}`);
  };

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        {/* {pages.map(page => <Typography variant="body1"
          key={page}
          color="secondary"
          component="span"
          className={classes.page}
          onClick={() => handlePageClick(page)}
        >
          {page.toUpperCase()}
        </Typography>)} */}
        
        <div style={{ flexGrow : 1 }}/>
        <IconButton 
          onClick={() => handleIconClick('')}
          color="secondary"
        >
          <Home/>            
        </IconButton>
        <IconButton 
          onClick={() => handleIconClick('setting')}
          color="secondary"
        >
          <AccountCircle/>            
        </IconButton>
        {/* <IconButton 
          onClick={handleMenu}
          color="secondary"
        >
          <AccountCircle/>            
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLoginMenuClick}>{user ? 'Logout' : 'Login'}</MenuItem>
        </Menu> */}
      </Toolbar>
    </AppBar>
  );
}
export default Appbar;
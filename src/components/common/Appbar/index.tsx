import { AppBar, IconButton, makeStyles, Menu, MenuItem, Toolbar } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { firebaseAuth } from 'src/provider/AuthProvider';

const useStyles = makeStyles({
  root : {
    position : 'sticky',
    top : 0
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
    console.log(user);
    if (user) {
      signOut();
    } else {
      history.push('/login');
      handleClose();
    }
  };

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <div style={{ flexGrow : 1 }}/>
        <IconButton onClick={handleMenu}>
          <AccountCircle/>            
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLoginMenuClick}>{user ? 'Logout' : 'Login'}</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
export default Appbar;
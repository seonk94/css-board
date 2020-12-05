import { Box, Button, Card, CardContent, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import LoginForm from 'src/components/Login/LoginForm';
import AuthProvider, { firebaseAuth } from 'src/provider/AuthProvider';

const useStyles = makeStyles({
  root : {
    height : 'calc(100vh - 64px)'
  }
});
function login() {
  const classes = useStyles();

  return (
    <Grid 
      container 
      alignItems="center" 
      justify="center"
      className={classes.root}
    >
      <Grid item xs={12} md={4} sm={6}>
        <LoginForm/>
      </Grid>
    </Grid>
  );
}
export default login;
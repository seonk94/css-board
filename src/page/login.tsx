import { Grid, makeStyles } from '@material-ui/core';
import React  from 'react';
import { SignInForm } from 'src/components/Sign';

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
      <Grid item
        xs={12}
        md={4}
        sm={6}>
        <SignInForm/>
      </Grid>
    </Grid>
  );
}
export default login;
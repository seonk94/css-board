import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import UserInfoForm from 'src/components/Settings/UserInfoForm';
import { SignInForm } from 'src/components/Sign';
import { firebaseAuth } from 'src/provider/AuthProvider';

const useStyles = makeStyles({
  gridContainer : {
    margin : '0px'
  },
  gridItem : {
    width : '100%',
    padding : '12px'
  }
});

function setting() {
  const { user } = useContext(firebaseAuth);
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid container
        className={classes.gridContainer}
        justify="center"
        alignItems="center"
        direction="column">
        <Grid item
          className={classes.gridItem}
          xs={12}
          md={8}>
          {user ? <UserInfoForm/> : <SignInForm/>}
        </Grid>
      </Grid>
    </Container>
  );
}
export default setting;
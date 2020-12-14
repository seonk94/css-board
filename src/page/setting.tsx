import { Container, Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import UserInfoForm from 'src/components/Settings/UserInfoForm';
import SignInForm from 'src/components/Sign/SignInForm';
import { firebaseAuth } from 'src/provider/AuthProvider';

function setting() {
  const { user } = useContext(firebaseAuth);
  return (
    <Container maxWidth="md">
      <Grid container
        justify="center"
        alignItems="center"
        direction="column">
        {user ? <UserInfoForm/> : <SignInForm/>}
      </Grid>
    </Container>
  );
}
export default setting;
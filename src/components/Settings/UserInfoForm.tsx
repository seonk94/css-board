import { Box, Button, Card, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { firebaseAuth } from 'src/provider/AuthProvider';

const useStyles = makeStyles({
  root : {
    width : '100%',
    padding : '12px',
    boxSizing : 'border-box'
  },
  typobox : {
    marginBottom : '12px'
  },
  blockbutton : {
    width : '100%'
  }
}); 
function UserInfoForm() {
  const classes = useStyles();
  const { user, signOut } = useContext(firebaseAuth);

  const handleSignOut = () => {
    signOut();
  };

  return (
    user 
      ? <Card variant="outlined"
        className={classes.root}>
        <Box className={classes.typobox}>
          <Grid container>
            <Grid item
              xs={3}
            >
              <Typography variant="body1"
                component="p">
              Email
              </Typography>
            </Grid>  
            <Grid item
              xs={9}
            >
              <Typography variant="body1"
                component="p">
                {user.email}
              </Typography>
            </Grid>  
          </Grid>
        </Box>
        <Box>
          <Button variant="contained"
            className={classes.blockbutton}
            color="primary"
            onClick={handleSignOut}>
        로그아웃
          </Button>
        </Box>
      </Card>
      : <h3>Error !!</h3>
  );
}
export default UserInfoForm;
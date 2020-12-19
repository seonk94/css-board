import { Box, Button, Card, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { firebaseAuth } from 'src/provider/AuthProvider';
import { NeumorphismBox } from 'src/style/Neumorphism';
const useStyles = makeStyles({
  root : {
    margin : '1rem',
    padding : '12px',
    boxSizing : 'border-box',
    ...NeumorphismBox
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
      ? <Paper
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
      </Paper>
      : <h3>Error !!</h3>
  );
}
export default UserInfoForm;
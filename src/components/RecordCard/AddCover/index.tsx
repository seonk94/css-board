import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root : {
    position : 'absolute',
    top : 0,
    left : 0,
    width : '100%',
    height : '100%',
    backgroundColor : '#00000088'
  },
  container : {
    height : '100%'
  },
  typography : {
    color : '#fff'
  },
  button : {
    color : '#fff',
    borderColor : '#fff'
  }
});

function AddCover() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid 
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.container}
        spacing={4}
      >
        <Grid item>
          <Typography variant="h5" component="p" className={classes.typography}>
            기념일을 등록해보세요.
          </Typography>
        </Grid>
        <Grid item>
          <Button className={classes.button} variant="outlined">
            추가하기
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default AddCover;
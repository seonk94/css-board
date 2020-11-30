import { Box, Button, Card, CardContent, IconButton, Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles({
  root : {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    margin : '12px auto'
  },
  button : {
    width : '100%',
    height : '100%'
  }
});
function AddCard() {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <Button className={classes.button}>
        <AddCircleOutlineIcon/>
      </Button>
    </Card>
  );
}

export default AddCard;
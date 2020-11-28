import { Box, Button, Card, CardContent, IconButton } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles({
  root : {
    display : 'flex',
    maxWidth : 400,
    minWidth : 320,
    maxHeight : 400,
    minHeight : 320,
    width : '25vw',
    height : '25vw',
    alignItems : 'center',
    justifyContent : 'center',
    margin : 'auto'
  },
  button : {
    width : '100%',
    height : '100%'
  }
});
function AddCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Button className={classes.button}>
        <AddCircleOutlineIcon/>
      </Button>
    </Card>
  );
}

export default AddCard;
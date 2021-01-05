import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root : {
    flexGrow : 1
  }
});
function Spacer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
    </div>
  );
}

export default Spacer;

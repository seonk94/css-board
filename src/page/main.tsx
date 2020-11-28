import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import AddCard from 'src/components/common/AddCard';

const useStyles = makeStyles({
  gridContainer : {
    margin : '0px'
  }
});
function main() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={12}>
          <AddCard/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default main;

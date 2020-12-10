import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import AddCard from 'src/components/common/AddCard';
import EditCard from 'src/components/EditCard';
import RecordCard from 'src/components/RecordCard';

const useStyles = makeStyles({
  gridContainer : {
    margin : '0px'
  },
  gridItem : {
    width : '100%',
    padding : '12px'
  }
});
function main() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid 
        container 
        className={classes.gridContainer} 
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item
          className={classes.gridItem}
          xs={12}
          md={8}>
          <RecordCard isEmpty/>
        </Grid>
        <Grid item
          className={classes.gridItem}
          xs={12}
          md={8}>
          <RecordCard/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default main;

import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { RecordEditCard } from 'src/components/Record';

const useStyles = makeStyles({
  gridContainer : {
    margin : '0px'
  },
  gridItem : {
    width : '100%',
    padding : '12px'
  }
});

function create() {
  const classes = useStyles();
  return <Container maxWidth="md">
    <Grid 
      container 
      className={classes.gridContainer} 
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid 
        item
        className={classes.gridItem}
        xs={12}
        md={8}
      >
        <RecordEditCard />
      </Grid>
    </Grid>
  </Container>;
}
export default create;
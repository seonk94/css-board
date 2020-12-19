import { Container, Grid, makeStyles } from '@material-ui/core';
import { Match } from '@testing-library/react';
import React from 'react';
import { match } from 'react-router';
import { RecordDetailCard } from 'src/components/Record';

const useStyles = makeStyles({
  gridContainer : {
    margin : '0px'
  },
  gridItem : {
    width : '100%',
    padding : '12px'
  }
});

interface DDayMatchInterface extends match {
  params : { id : string };
}
interface Props {
  match : DDayMatchInterface;
}
function dDay({ match } : Props) {
  const recordId = match.params.id;
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid container
        className={classes.gridContainer} 
        justify="center"
        alignItems="center">
        <Grid item
          className={classes.gridItem}
          xs={12}
          md={8}>
          <RecordDetailCard id={recordId}/>          
        </Grid>
      </Grid>
    </Container>
  );
}

export default dDay;

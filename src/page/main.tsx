import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import RecordCard from 'src/components/RecordCard';
import { getRecords } from 'src/firebase/database/record';
import { firebaseAuth } from 'src/provider/AuthProvider';
import { IRecord } from 'src/types';

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
  const [records, setRecords] = useState([] as IRecord[]);
  const { user } = useContext(firebaseAuth);
  
  useEffect(() => {
    const fetchRecords = async () => {
      if (user?.uid) {
        const records = await getRecords(user.uid);
        setRecords([...records]);
      }
    };

    fetchRecords();
  }, []);

  return (
    <Container maxWidth="md">
      <Grid 
        container 
        className={classes.gridContainer} 
        direction="column"
        justify="center"
        alignItems="center"
      >
        {records.map(record => 
          <Grid 
            item
            key={record.id}
            className={classes.gridItem}
            xs={12}
            md={8}>
            <RecordCard record={record}/>
          </Grid>)}
      </Grid>
    </Container>
  );
}

export default main;

import { CardContent, CardHeader, CardMedia, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { getRecordById } from 'src/firebase/database/record';
import { firebaseAuth } from 'src/provider/AuthProvider';
import { IRecord } from 'src/types';
import { NeumorphismBox } from 'src/style/Neumorphism';

const useStyles = makeStyles({
  root : {
    margin : '1rem',
    ...NeumorphismBox
  },
  media : {
    height : 0,
    paddingTop : '56.25%'
  }
});
interface Props {
  id: string;
}
function RecordDetailCard({ id } : Props) {
  const { user } = useContext(firebaseAuth);
  const [record, setRecord] = useState<IRecord | null>(null);
  const classes = useStyles();
  useEffect(() => {
    const fetchRecord = async () => {
      if (user?.uid) {
        const record = await getRecordById(user.uid, id);
        setRecord(record as IRecord);
      }
    };
    fetchRecord();
  }, []);
  return (
    record 
      ? <Paper
        className={classes.root}>
        <CardHeader
          title={record.title}
          subheader={record.dDay}
        />
        {
          record.image && <CardMedia className={classes.media}
            image={record.image}/>
        }
        <CardContent>
          <Typography variant="body2"
            component="p">
            {record.content}
          </Typography>
        </CardContent>
      </Paper>
      : <h3>
        Not found Id
      </h3>
  );
}

export default RecordDetailCard;
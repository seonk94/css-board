import { Box, Collapse, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import { AddCircleOutline, ExpandLess, ExpandMore } from '@material-ui/icons';
import firebase from 'firebase/app';
import React, { useContext, useState } from 'react';
import { putRecord } from 'src/firebase/database/record';
import { firebaseAuth } from 'src/provider/AuthProvider';
import { NeumorphismBox } from 'src/style/Neumorphism';
import { IRecord } from 'src/types';
import Spacer from '../common/Spacer';
import RecordEditForm from './RecordEditForm';

const useStyles = makeStyles({
  root : {
    margin : '1rem',
    ...NeumorphismBox
  },
  button : {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    padding : '1rem',
    '&:hover' : {
      cursor : 'pointer'
    }
  },
  paperRoot : {
    padding : '1rem'
  },
  textField : {
    width : '100%',
    marginBottom : '24px'
  },
  textarea : {
    width : '100%',
    marginBottom : '24px'
  }
});
interface Props {
  record : IRecord;
}
function AddRecordScheduleButton({ record } : Props) {
  const classes = useStyles();
  const { user } = useContext(firebaseAuth);
  const [expand, setExpand] = useState(false);
  const submitFunction = (title : string, content : string, date : moment.Moment, file : File | null) => {
    if (!user) return;

    const submitPostRecord = async(uid: string, url?: string) => {
      const result = await putRecord(uid, {
        ...record,
        detailRecords : [
          ...record.detailRecords,
          {
            id : String(new Date().getTime()),
            title : title,
            content : content,
            dDay : date.format('YYYY-MM-DD'),
            image : url || ''
          } as IRecord
        ]
      });
    };

    if (file) {
      const storageRef = firebase.storage().ref();
      const recordImageRef = storageRef.child(`record-images/${new Date().getTime()}`);
  
      const uploadTask = recordImageRef.put(file);

      uploadTask.on('state_changed', (snapshot) => {
        switch(snapshot.state) {
        case firebase.storage.TaskState.PAUSED : break;
        case firebase.storage.TaskState.RUNNING : break;
        }
      }, (error) => {
        console.error(error);
      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then(url => {
          submitPostRecord(user.uid, url);
        });
      });
    } else {
      submitPostRecord(user.uid);
    }
  };
  return (
    <Paper className={classes.root}>
      <Box className={classes.button}
        onClick={() => setExpand(!expand)}>
        <Typography variant="h6"
          component="p">
        일정 추가
        </Typography>
        {/* <AddCircleOutline/> */}
        <Spacer/>
        {
          expand ? <ExpandLess/> : <ExpandMore/>
        }
      </Box>
      <Collapse in={expand}>
        <Box className={classes.paperRoot}>
          <RecordEditForm submitFunction={submitFunction}/>
        </Box>
      </Collapse>
    </Paper>
  );
}

export default AddRecordScheduleButton;

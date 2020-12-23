import { Box, Button, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import firebase from 'firebase/app';
import moment from 'moment';
import React, { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { postRecord } from 'src/firebase/database/record';
import { firebaseAuth } from 'src/provider/AuthProvider';
import { NeumorphismBox } from 'src/style/Neumorphism';
import { IRecord } from 'src/types';
import RecordEditForm from './RecordEditForm';

const useStyles = makeStyles({
  root : {
    margin : '1rem',
    ...NeumorphismBox
  },
  container : {
    padding : '24px'
  },
  textfield : {
    width : '100%',
    marginBottom : '24px'
  },
  textarea : {
    width : '100%',
    marginBottom : '24px'
  },
  blockbutton : {
    width : '100%'
  },
  calendar : {
    width : '100%',
    marginBottom : '24px'
  },
  fileinput : {
    display : 'none'
  },
  fileinputbutton : {
    width : '100%',
    marginBottom : '24px',
    '&:hover' : {
      border : '1px solid #000'
    }
  }
});
function RecordEditCard() {
  const classes = useStyles();
  const { user } = useContext(firebaseAuth);
  const history = useHistory();

  const submitFunction = (title : string, content : string, date : moment.Moment, file : File | null) => {
    if (!user) return;

    const submitPostRecord = async(uid: string, url?: string) => {
      const result = await postRecord(uid, {
        id : String(new Date().getTime()),
        title : title,
        content : content,
        dDay : date.format('YYYY-MM-DD'),
        image : url || '',
        detailRecords : [] as IRecord[]
      });
      if (result) history.push('/');
      else alert('등록에 실패했습니다.');
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
    <Paper
      className={classes.root}>
      <div className={classes.container} >
        <RecordEditForm submitFunction={submitFunction}/>
      </div>
    </Paper>
  );
}
export default React.memo(RecordEditCard);
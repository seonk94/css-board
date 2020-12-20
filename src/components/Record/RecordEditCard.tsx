import { Box, Button, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import firebase from 'firebase/app';
import moment from 'moment';
import React, { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { postRecord } from 'src/firebase/database/record';
import { firebaseAuth } from 'src/provider/AuthProvider';
import { NeumorphismBox } from 'src/style/Neumorphism';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import useInputs from 'src/hooks/useInputs';
import useDate from 'src/hooks/useDate';
import DatePickerBox from '../common/DatePickerBox';
import useFileInput from 'src/hooks/useFileInput';
import FileInputBox from '../common/FileInputBox';

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
  
  const [file, onFileChange] = useFileInput(null);
  const [date, setDate] = useDate();
  const [form, onChange] = useInputs({
    title : '',
    content : ''
  });

  const handleSubmit = () => {
    if (!user) return;

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

  const submitPostRecord = async(uid: string, url?: string) => {
    const result = await postRecord(uid, {
      id : new Date().getTime(),
      title : form.title,
      content : form.content,
      dDay : date.format('YYYY-MM-DD'),
      image : url || ''
    });
    if (result) history.push('/');
    else alert('등록에 실패했습니다.');
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Paper
        className={classes.root}>
        <div className={classes.container} >
          <Box>
            <TextField 
              className={classes.textfield} 
              label="Title" 
              variant="outlined"
              name="title" 
              onChange={onChange}
            />
          </Box>
          <Box>
            <Typography variant="h5">
              Description
            </Typography>
            <TextField
              className={classes.textarea} 
              variant="outlined"
              multiline
              name="content"
              onChange={onChange}
              rows={5}
            />
          </Box>
          <DatePickerBox
            date={date}
            onChange={setDate}
            classes={classes.calendar}
          />
          <FileInputBox
            file={file}
            onChange={onFileChange}
            classes={classes.fileinputbutton}
          />
          <Box>
            <Button 
              variant="contained" 
              color="primary" 
              className={classes.blockbutton}
              onClick={handleSubmit}
            >
            생성하기
            </Button>
          </Box>
        </div>
      </Paper>
    </MuiPickersUtilsProvider>
  );
}
export default React.memo(RecordEditCard);
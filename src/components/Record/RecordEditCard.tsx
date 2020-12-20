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
  const [date, setDate] = useState(moment());
  const fileInput = useRef<any>();
  const history = useHistory();
  const [file, setFile] = useState<File | null>(null);
  const [inputs, setInputs] = useState<{
    title : string,
    content: string,
  }>({
    title : '',
    content : ''
  });

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name] : value }));
  };

  const handlePhoto = (e : React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file);
    }
  };

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
      title : inputs.title,
      content : inputs.content,
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
              onChange={handleChange}
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
              onChange={handleChange}
              rows={5}
            />
          </Box>
          <Box>
            <DatePicker
              value={date}
              className={classes.calendar}
              variant="inline"
              format="YYYY-MM-DD"
              inputVariant="outlined"
              label="Date"
              autoOk
              onChange={date => setDate(date as moment.Moment)}
            />
          </Box>
          <Box>
            <input 
              type="file" 
              className={classes.fileinput}
              onChange={handlePhoto}
              ref={fileInput}/>
            <Button 
              className={classes.fileinputbutton}
              variant="outlined"
              onClick={() => fileInput.current.click()}>
              { file ? file.name : '사진 선택' }
            </Button>
          </Box>
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
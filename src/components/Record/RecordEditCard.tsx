import { Box, Button, InputBase, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import { SwapVerticalCircleSharp } from '@material-ui/icons';
import firebase from 'firebase/app';
import moment from 'moment';
import React, { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { postRecord } from 'src/firebase/database/record';
import { firebaseAuth } from 'src/provider/AuthProvider';

const useStyles = makeStyles({
  root : {
    width : '100%'
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
  const today = moment(new Date).format('YYYY-MM-DD');
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
      dDay : today,
      image : url || ''
    });
    if (result) history.push('/');
    else alert('등록에 실패했습니다.');
  };

  return (
    <Paper variant="outlined"
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
          <TextField
            className={classes.calendar}
            label="Date"
            type="date"
            defaultValue={today}
            variant="outlined"
            InputLabelProps={{
              shrink : true
            }}
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
  );
}
export default React.memo(RecordEditCard);
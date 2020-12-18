import { Box, Button, Card, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import moment from 'moment';
import React, { useContext, useState } from 'react';
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
  }
});
function EditCard() {
  const classes = useStyles();
  const { user } = useContext(firebaseAuth);
  const today = moment(new Date).format('YYYY-MM-DD');
  const [inputs, setInputs] = useState({
    title : '',
    content : ''
  });

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name] : value }));
  };

  const handleSubmit = () => {
    if (!user) return;
    postRecord(user.uid, {
      id : new Date().getTime(),
      title : inputs.title,
      content : inputs.content,
      dDay : today
    });
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
export default EditCard;
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useDate from 'src/hooks/useDate';
import useFileInput from 'src/hooks/useFileInput';
import useInputs from 'src/hooks/useInputs';
import DatePickerBox from '../common/DatePickerBox';
import FileInputBox from '../common/FileInputBox';
const useStyles = makeStyles({
  textfield : {
    width : '100%',
    marginBottom : '24px'
  },
  textarea : {
    width : '100%',
    marginBottom : '24px'
  },
  calendar : {
    width : '100%',
    marginBottom : '24px'
  },
  fileinputbutton : {
    width : '100%',
    marginBottom : '24px',
    '&:hover' : {
      border : '1px solid #000'
    }
  },
  blockbutton : {
    width : '100%'
  }
});
interface Props {
  submitFunction : (title : string, content : string, date : moment.Moment, file : File | null) => void;
}

function RecordEditForm({ submitFunction } : Props) {
  const classes = useStyles();
  const [file, onFileChange] = useFileInput(null);
  const [date, setDate] = useDate();
  const [form, onChange] = useInputs({
    title : '',
    content : ''
  });

  const handleSubmit = () => {
    submitFunction(form.title, form.content, date, file);
  };
  return (
    <>
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
    </>
  );
}

export default RecordEditForm;

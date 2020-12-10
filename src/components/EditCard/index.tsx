import { Box, Button, Card, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';

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
  const today = new Date().toISOString().slice(0, 10);

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
          >
            생성하기
          </Button>

        </Box>
      </div>
    </Paper>
  );
}
export default EditCard;
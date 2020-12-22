import { Box } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import moment from 'moment';
import React, { Dispatch, SetStateAction } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
interface Props {
  date : moment.Moment,
  onChange : Dispatch<SetStateAction<moment.Moment>>,
  classes : string
}

function DatePickerBox({ date, onChange, classes } : Props) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>

      <Box>
        <DatePicker
          value={date}
          className={classes}
          variant="inline"
          format="YYYY-MM-DD"
          inputVariant="outlined"
          label="Date"
          autoOk
          onChange={date => onChange(date as moment.Moment)}
        />
      </Box>
    </MuiPickersUtilsProvider>
  );
}

export default DatePickerBox;

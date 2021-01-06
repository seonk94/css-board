import { Box, Collapse, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { IRecord } from 'src/types';
import { NeumorphismBox } from 'src/style/Neumorphism';
import RecordPreviewCard from './RecordPreviewCard';
import Spacer from '../common/Spacer';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

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
  }
});
interface Props {
  record: IRecord;
}
function RecordDetailCard({ record } : Props) {
  const classes = useStyles();
  const [expand, setExpand] = useState(false);
  return (
    <>
      <Paper className={classes.root}>
        <Box className={classes.button}
          onClick={() => setExpand(!expand)}>
          <Typography variant="h6"
            component="p">
            {record.dDay}
          </Typography>
          <Spacer/>
          {
            expand ? <ExpandLess/> : <ExpandMore/>
          }
        </Box>
      </Paper>
      <Collapse in={expand}>
        <Box className={classes.paperRoot}>
          <RecordPreviewCard record={record}/>
        </Box>
      </Collapse>
    </>
  );
}

export default RecordDetailCard;
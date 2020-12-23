import { CardContent, CardHeader, CardMedia, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { getRecordById } from 'src/firebase/database/record';
import { firebaseAuth } from 'src/provider/AuthProvider';
import { IRecord } from 'src/types';
import { NeumorphismBox } from 'src/style/Neumorphism';
import AddRecordScheduleButton from './AddRecordScheduleButton';
import RecordPreviewCard from './RecordPreviewCard';

const useStyles = makeStyles({
  root : {
    margin : '1rem',
    ...NeumorphismBox
  },
  media : {
    height : 0,
    paddingTop : '56.25%'
  }
});
interface Props {
  record: IRecord;
}
function RecordDetailCard({ record } : Props) {
  return (
    <div>
      {record.id}
    </div>
  );
}

export default RecordDetailCard;
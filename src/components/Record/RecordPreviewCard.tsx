import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import React from 'react';
import { IRecord } from 'src/types';
import CatImage from '../../assets/images/preview/cat_1.jpg';

interface Props {
  record : IRecord;
}

const useStyles = makeStyles({
  root : {
    position : 'relative'
  },
  header : {},
  media : {
    height : 0,
    paddingTop : '56.25%'
  }
});

function RecordPreviewCard({ record } : Props) {
  const classes = useStyles();

  return (
    <Card variant="outlined"
      className={classes.root}>
      <CardHeader 
        className={classes.header}
        avatar={
          <Avatar>C</Avatar>
        }
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title={record.title}
        subheader={record.dDay}
      />
      <CardMedia
        className={classes.media}
        image={record.image !== '' ? record.image : CatImage}
        title="Preview Img"
      />
      <CardContent>
        <Typography variant="body2"
          component="p"
          color="textSecondary">
          {record.content}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default RecordPreviewCard;
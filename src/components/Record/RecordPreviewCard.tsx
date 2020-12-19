import { Avatar, CardContent, CardHeader, CardMedia, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router';
import { IRecord } from 'src/types';
import CatImage from '../../assets/images/preview/cat_1.jpg';
import { NeumorphismBox } from 'src/style/Neumorphism';

interface Props {
  record : IRecord;
}

const useStyles = makeStyles({
  root : {
    position : 'relative',
    margin : '1rem',
    boxSizing : 'border-box',
    '&:hover' : {
      cursor : 'pointer'
    },
    ...NeumorphismBox
  },
  header : {},
  media : {
    height : 0,
    paddingTop : '56.25%'
  }
});

function RecordPreviewCard({ record } : Props) {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(`/d-day/${record.id}`);
  };

  return (
    <Paper
      onClick={handleClick}
      className={classes.root}>
      <CardHeader 
        className={classes.header}
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
    </Paper>
  );
}
export default RecordPreviewCard;
import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import React from 'react';
import CatImage from '../../assets/images/preview/cat_1.jpg';

const useStyles = makeStyles({
  root : {},
  header : {},
  media : {
    height : 0,
    paddingTop : '56.25%'
  }
});

function RecordCard() {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader 
        className={classes.header}
        avatar={
          <Avatar>R</Avatar>
        }
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title="Title"
        subheader=". 2020-11-29"
      />
      <CardMedia
        className={classes.media}
        image={CatImage}
        title="Preview Img"
      />
      <CardContent>
        <Typography variant="body2" component="p" color="textSecondary">
          설명...
        </Typography>
      </CardContent>
    </Card>
  );
}
export default RecordCard;
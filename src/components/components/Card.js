import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:'10px',
    backgroundcolor:'red'
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({title,image,des,darkState}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}  style={{backgroundColor:darkState? 'white': 'black'}} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent style={{backgroundcolor:darkState? 'white': 'black'}} >
          <Typography gutterBottom variant="h5" component="h2" style={{color:darkState? 'black': 'white'}} >
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"  style={{color:darkState? 'black': 'white'}} >
           {des}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" style={{color:'black'}}>
        <a href="https://github.com/preethihiremath" className={classes.iconEle}><GitHubIcon /></a>
        </Button>
      </CardActions>
    </Card>
  );
}

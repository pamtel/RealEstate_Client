import React from 'react';
import ReactPlayer from 'react-player';
import heroVideo from '../../images/hero.mov';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      height: '85vh',
      '& video': {
        objectFit: 'cover',
      },
    },
  }));

const HomeHero = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ReactPlayer 
            url={heroVideo}
            playing
            loop
            muted
            width="100%"
            height="100%"
            className="hidden lg:block"
            />
        </div>
    )
}

export default HomeHero

import React from 'react'
import {Button} from '@material-ui/core';
import {NavLink as RouterNavLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',
    color: 'black',
    '&:hover' : {
      backgroundColor: 'white',
      color: 'black',
    }
  },
}));


const CourseButton = ({type, to, children, ...props}) => {

  const classes = useStyles();

  switch (type) {
    case 'navigation':
    return(
      <Button color="inherit" component={RouterNavLink} to={to} activeClassName={classes.root} >
        {children}
      </Button>
    )
    default:
      return(
        <Button color="inherit">
          {children}
        </Button>
      )
  }
};

export default CourseButton;
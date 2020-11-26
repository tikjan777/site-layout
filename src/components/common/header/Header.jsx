import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import {CourseButton} from '../../index';
import './Header.css';

const Header = ({children, ...props}) => {

  return(
    <AppBar color={'primary'} position="static">
      <Toolbar>
        <CourseButton type='navigation' to="/home">
          Home
        </CourseButton>
        <CourseButton type='navigation' to="/users">
          Users
        </CourseButton>
        <CourseButton type='navigation' to="/repositories">
          Repositories
        </CourseButton>
        {children}
      </Toolbar>
    </AppBar>
  )
}

export default Header;
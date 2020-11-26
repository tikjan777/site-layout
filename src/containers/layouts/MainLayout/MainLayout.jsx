import React from 'react';
import {Header} from '../../../components';
import {Container, Paper} from '@material-ui/core';
import "./MainLayout.css"

const MainLayout = ({children, ...props}) => {
  return(
    <>
      <Header />
      <Container className="MainLayout__Container" maxWidth="lg">
        <Paper className="MainLayout__Paper" elevation={3}>
          {children}
        </Paper>
      </Container>
    </>
  )
};
export default MainLayout
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Home, Users, Repositories, MainLayout} from "./containers";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <MainLayout >
      <Switch>
        <Route
          exact
          component={Home}
          path="/home"
        />

        <Route
          exact
          path="/repositories"
          component={Repositories}
        />

        <Route
          exact
          path="/users"
          component={Users}
        />

        <Route exact path="/" component={Home} />

      </Switch>
    </MainLayout>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
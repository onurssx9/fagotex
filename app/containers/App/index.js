import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../Login';
import NotFoundPage from '../NotFoundPage/Loadable';
import HomePage from '../HomePage';
import Messages from '../Messages';

export default function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Messages" component={Messages} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  );
}

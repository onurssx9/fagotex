import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../Login';
import NotFoundPage from '../NotFoundPage/Loadable';
import HomePage from '../HomePage';

export default function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Login" component={Login} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  );
}

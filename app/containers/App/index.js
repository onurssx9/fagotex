import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faComments,
  faSignOutAlt,
  faTrashAlt,
  faFire,
  faStar,
  faUser,
  faTag,
} from '@fortawesome/free-solid-svg-icons';

import Login from '../Login';
import NotFoundPage from '../NotFoundPage/Loadable';
import HomePage from '../HomePage';
import Profile from '../Profile';

library.add([
  faHome,
  faComments,
  faSignOutAlt,
  faTrashAlt,
  faFire,
  faStar,
  faUser,
  faTag,
]);

export default function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Login" component={Login} />
        <Route path="/Profile" component={Profile} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  );
}

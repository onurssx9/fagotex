import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faComments,
  faSignOutAlt,
  faTrashAlt,
  faFire,
} from '@fortawesome/free-solid-svg-icons';

import Login from '../Login';
import NotFoundPage from '../NotFoundPage/Loadable';
import HomePage from '../HomePage';
import Messages from '../Messages';

library.add([faHome, faComments, faSignOutAlt, faTrashAlt, faFire]);

export default function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Login" component={Login} />
        <Route path="/Messages" component={Messages} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  );
}

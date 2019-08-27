import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from 'features/Home';
import { CreateUser } from 'features/CreateUser';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/createuser" component={CreateUser} />
    <Route render={() => <h1>Page not found</h1>} />
  </Switch>
);

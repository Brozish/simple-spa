import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Container } from 'reactstrap';

import PrivateRoute from 'Components/router/PrivateRoute';
import Sign from 'Components/Sign';
import Home from 'Components/Home';
import history from '../history';

const App = () => (
  <ConnectedRouter history={history}>
    <Container>
      <Switch>
        <PrivateRoute exact path="/" />
        <PrivateRoute exact path="/home" component={Home} />
        <Route exact path="/login" component={() => <Sign typeSign="signIn" />} />
        <Route exact path="/register" component={() => <Sign typeSign="signUp" />} />
        <Redirect to="/" />
      </Switch>
    </Container>
  </ConnectedRouter>
);

export default App;

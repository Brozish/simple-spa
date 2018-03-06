import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Container } from 'reactstrap';

import history from '../history';
import PageError from 'Components/router/PageError';
import Home from 'Components/Home';
import { PAGE_NOT_FOUND } from 'constants';

const App = props => {
  return (
    <ConnectedRouter history = {history}>
      <Container>
        <Switch>
          <Redirect exact from = '/' to = '/home' />
          <Route exact path = '/home' component = {Home} />
          <Route component = {pageError} />
        </Switch>
      </Container>
    </ConnectedRouter>
  );
}

const pageError = () => {
  return <PageError message = {PAGE_NOT_FOUND} status = {404} />;
}

export default App;

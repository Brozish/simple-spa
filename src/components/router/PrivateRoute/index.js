import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Home from 'Components/Home';

class PrivateRoute extends Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string
    }),
    component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ])
  }

  static defaultProps = {
    component: Home,
    user: null
  }

  handleRender = (Component, user) => props => (
    user ? <Component {...props} /> : <Redirect to="/login" />
  );

  render() {
    const { user, component, ...rest } = this.props;

    return <Route {...rest} render={this.handleRender(component, user)} />;
  }
}

export default connect(state => ({
  user: state.auth.user
}))(PrivateRoute);

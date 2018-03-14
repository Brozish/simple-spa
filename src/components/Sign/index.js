import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Form, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import InputField from 'Components/InputField';
import { signIn, signUp } from 'Redux/ac/auth';
import { startCase } from 'lodash';

class Sign extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    typeSign: PropTypes.string.isRequired,
    signIn: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string
    })
  };

  static defaultProps = {
    user: null
  }

  getInputField = ({ input, meta: { touched, error }, type }) => (
    <InputField
      type={type}
      {...propsInput[type]}
      input={input}
      touched={touched}
      error={error}
    />
  );

  getSignUp = typeSign => {
    if (typeSign.localeCompare('signIn')) return null;

    return <Button color="link" href="/register">Sign Up</Button>;
  }

  handleSubmit = (sign, reset) => values => {
    reset();
    sign(values);
  }

  render() {
    const {
      handleSubmit, signIn, signUp, reset, submitting, user, typeSign
    } = this.props;

    const auth = {
      signIn, signUp
    };

    if (user) return <Redirect to="/" />;

    return (
      <Form onSubmit={handleSubmit(this.handleSubmit(auth[typeSign], reset))}>
        <Field
          type="email"
          name="email"
          component={this.getInputField}
        />
        <Field
          type="password"
          name="password"
          component={this.getInputField}
        />
        <Button color="primary" disabled={submitting}>{startCase(typeSign)}</Button>
        {this.getSignUp(typeSign)}
      </Form>
    );
  }
}

const propsInput = {
  email: {
    id: 'fieldEmail',
    placeholder: 'Email'
  },
  password: {
    id: 'fieldPassword',
    placeholder: 'Password'
  }
};

export default connect(state => ({
  user: state.auth.user
}), { signIn, signUp })(reduxForm({
  form: 'sign-form'
})(Sign));

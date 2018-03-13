import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

const InputField = ({
  type, id, placeholder, touched, error, input
}) => (
  <FormGroup>
    <Label for={id}>Email</Label>
    <Input
      type={type}
      {...input}
      id={id}
      placeholder={placeholder}
      invalid={!!(touched && error)}
    />
    {touched && error && (
      <FormFeedback>{error}</FormFeedback>
    )}
  </FormGroup>
);

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  input: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};

InputField.defaultProps = {
  touched: false,
  error: false
};

export default InputField;

import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const InputField = ({
  type, id, placeholder, touched, error, input, labelStatus
}) => (
  <FormGroup>
    {getLabel(labelStatus, id, placeholder)}
    <Input
      type={type}
      {...input}
      id={id}
      placeholder={placeholder}
      invalid={!!(touched && error)}
    />
  </FormGroup>
);

const getLabel = (labelStatus, id, placeholder) => (
  labelStatus ? <Label for={id}>{placeholder}</Label> : null
);

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  labelStatus: PropTypes.bool,
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
  error: false,
  labelStatus: true
};

export default InputField;

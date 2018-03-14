import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { deleteInvoice } from 'Redux/ac/invoices';
import InputField from 'Components/InputField';

class Invoice extends Component {
  static propTypes = {
    deleteInvoice: PropTypes.func.isRequired,
    updateInvoice: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    toggleState: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
    initialize: PropTypes.func.isRequired,
    invoice: PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number
    })
  }

  static defaultProps = {
    invoice: {}
  }

  componentDidMount() {
    const { initialize, invoice } = this.props;

    initialize({
      id: invoice.id,
      text: invoice.text,
      description: invoice.description,
      price: invoice.price
    });
  }

  getInputField = ({ input, type }) => (
    <InputField
      type={type}
      {...propsInput[input.name]}
      input={input}
      labelStatus={false}
    />
  )

  getChunk = (
    id, text, description, price,
    updateInvoice, handleSubmit, toggleState, isSelected
  ) => (
    !isSelected ?
      <Fragment>
        <td>{text}</td>
        <td>{description}</td>
        <td>{price}</td>
        <td>
          <Button color="link" onClick={toggleState}>Edit</Button>
        </td>
      </Fragment> :
      <form onSubmit={handleSubmit(this.props[`handleSubmit${id}`])}>
        <td>
          <Field
            type="text"
            name="text"
            component={this.getInputField}
          />
        </td>
        <td>
          <Field
            type="text"
            name="description"
            component={this.getInputField}
          />
        </td>
        <td>
          <Field
            type="text"
            name="price"
            component={this.getInputField}
          />
        </td>
        <td>
          <Button color="primary" type="submit">Update</Button>
        </td>
      </form>);

  handleDelete = (deleteInvoice, id) => event => {
    event.preventDefault();
    deleteInvoice(id);
  }

  render() {
    const {
      deleteInvoice, invoice: {
        id, text, description, price
      }, updateInvoice, handleSubmit, toggleState, isSelected
    } = this.props;

    return (
      <tr>
        <td>{id}</td>
        {this.getChunk(
          id, text, description, price,
          updateInvoice, handleSubmit, toggleState, isSelected
        )}
        <td>
          <Button color="danger" onClick={this.handleDelete(deleteInvoice, id)}>X</Button>
        </td>
      </tr>
    );
  }
}

const propsInput = {
  text: {
    id: 'fieldText',
    placeholder: 'Text'
  },
  description: {
    id: 'fieldDescription',
    placeholder: 'Description'
  },
  price: {
    id: 'fieldPrice',
    placeholder: 'Price'
  }
};

export default connect((state, ownProps) => ({
  form: `update-invoice-form-${ownProps.invoice.id}`,
  [`handleSubmit${ownProps.invoice.id}`]: values => {
    ownProps.updateInvoice(values);
    ownProps.toggleReset();
  }
}), { deleteInvoice })(reduxForm({})(Invoice));

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Button } from 'reactstrap';

import Invoice from 'Components/Invoice';
import { addInvoice, updateInvoice } from 'Redux/ac/invoices';
import switchingForm from 'Decorators/switchingForm';

class InvoicesTable extends Component {
  static propTypes = {
    invoices: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number
    })).isRequired,
    addInvoice: PropTypes.func.isRequired,
    toggleState: PropTypes.func.isRequired,
    toggleReset: PropTypes.func.isRequired,
    selectInvoiceForm: PropTypes.number.isRequired,
    updateInvoice: PropTypes.func.isRequired
  };

  getData = (invoices, toggleState, selectInvoiceForm, updateInvoice, toggleReset) => {
    if (!invoices.length) return null;

    return invoices.map(item => (
      <Invoice
        key={item.id}
        invoice={item}
        toggleState={toggleState(item.id)}
        isSelected={item.id === selectInvoiceForm}
        updateInvoice={updateInvoice}
        toggleReset={toggleReset}
      />
    ));
  }

  getInvoices = (invoices, toggleState, selectInvoiceForm, updateInvoice, toggleReset) => {
    if (!invoices.length) return 'No invoices yet';

    return (
      <Table striped size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Text</th>
            <th>Description</th>
            <th>Price</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {this.getData(invoices, toggleState, selectInvoiceForm, updateInvoice, toggleReset)}
        </tbody>
      </Table>
    );
  }

  handleClick = addInvoice => event => {
    event.preventDefault();
    addInvoice();
  }

  render() {
    const {
      invoices, addInvoice, updateInvoice, toggleState, selectInvoiceForm, toggleReset
    } = this.props;

    return (
      <Fragment>
        <Button color="primary" onClick={this.handleClick(addInvoice)}>Add</Button>
        <br />
        <br />
        {this.getInvoices(invoices, toggleState, selectInvoiceForm, updateInvoice, toggleReset)}
      </Fragment>
    );
  }
}

export default connect(state => ({
  invoices: state.invoices.entities.toArray()
}), { addInvoice, updateInvoice })(switchingForm(InvoicesTable));

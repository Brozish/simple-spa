import React, { Component } from 'react';

export default OriginalComponent => class SwitchingFormComponents extends Component {
  state = {
    selectInvoiceForm: 0
  };

  toggleState = itemId => event => {
    event.preventDefault();
    this.setState({
      selectInvoiceForm: itemId === this.state.selectInvoiceForm ?
        0 : itemId
    });
  }

  toggleReset = () => {
    this.setState({
      selectInvoiceForm: 0
    });
  }

  render() {
    return (
      <OriginalComponent
        {...this.props}
        {...this.state}
        toggleState={this.toggleState}
        toggleReset={this.toggleReset}
      />
    );
  }
};

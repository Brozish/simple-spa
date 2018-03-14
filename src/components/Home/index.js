import React, { Fragment, Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signOut } from 'Redux/ac/auth';
import InvoicesTable from 'Components/InvoicesTable';

class Home extends Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string
    })
  }

  static defaultProps = {
    user: null
  }

  state = {
    isOpen: false
  }

  handleClick = event => {
    event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout = signOut => event => {
    event.preventDefault();
    signOut();
  }

  render() {
    const { isOpen } = this.state;
    const { signOut, user } = this.props;

    return (
      <Fragment>
        <Navbar color="faded" light expand="sm">
          <NavbarBrand>{user.email}</NavbarBrand>
          <NavbarToggler onClick={this.handleClick} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="" onClick={this.handleLogout(signOut)}>logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <InvoicesTable />
      </Fragment>
    );
  }
}

export default connect(state => ({
  user: state.auth.user
}), { signOut })(Home);

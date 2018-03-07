import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';

import { SERVER_MESSAGE_STATUS, BUTTON_HOME_PAGE } from 'constants';
import { redirectHome } from 'Redux/ac/redirect';

class PageError extends Component {
  static propTypes = {
    redirectHome: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired
  };

  handleClick = redirectHome => event => {
    event.preventDefault();
    redirectHome();
  }

  render() {
    const { redirectHome, message, status } = this.props;

    return (
      <Fragment>
        <h1 className="text-center">{SERVER_MESSAGE_STATUS(message, status)}</h1>
        <Row>
          <Col lg={lgLayout} md={mdLayout} sm={smLayout} xs={12}>
            <Button block onClick={this.handleClick(redirectHome)}>{BUTTON_HOME_PAGE}</Button>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

const lgLayout = { size: 4, offset: 4 };
const mdLayout = { size: 6, offset: 3 };
const smLayout = { size: 8, offset: 2 };

export default connect(null, { redirectHome })(PageError);

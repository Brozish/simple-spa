import React, { Fragment } from 'react';

import { ABOUT } from 'constants';

const Home = props => {
  return (
    <Fragment>
      <h1 className = 'text-center'>{ABOUT}</h1>
    </Fragment>
  );
}

export default Home;

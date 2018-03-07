import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import reducer from 'Redux/reducers';
import logger from 'Redux/middlewares/logger';
import history from '../../history';

export const store = createStore(
  reducer,
  {},
  applyMiddleware(
    routerMiddleware(history),
    logger
  )
);

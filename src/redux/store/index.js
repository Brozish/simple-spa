import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducer from 'Redux/reducers';
import logger from 'Redux/middlewares/logger';
import history from '../../history';

export const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    routerMiddleware(history),
    logger
  )
);

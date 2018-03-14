import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as FormReducer } from 'redux-form';

import auth from './auth';
import invoices from './invoices';
import id from './id';

export default combineReducers({
  router: routerReducer,
  form: FormReducer,
  auth,
  invoices,
  id
});

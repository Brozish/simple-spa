import { SIGN_IN, SIGN_UP, SIGN_OUT } from 'constants';
import { Record } from 'immutable';

const AuthRecord = Record({
  user: null,
  loading: false
});

export default (authState = new AuthRecord(), action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_UP:
      return authState.set('user', payload);
      break;
    case SIGN_IN:
      return authState.set('user', payload);
      break;
    case SIGN_OUT:
      return authState.delete('user');
      break;
    default:
      return authState;
  }
};

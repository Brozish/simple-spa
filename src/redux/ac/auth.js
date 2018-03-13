import { SIGN_IN, SIGN_UP, SIGN_OUT } from 'constants';

export function signIn({ email }) {
  return dispatch => {
    const id = Date.now().toString(36).substr(2);

    localStorage.setItem('user', JSON.stringify({ id, email }));
    dispatch({
      type: SIGN_IN,
      payload: {
        id, email
      }
    });
  };
}

export function signOut() {
  return dispatch => {
    localStorage.removeItem('user');
    dispatch({
      type: SIGN_OUT
    });
  };
}

export function signUp({ email }) {
  return dispatch => {
    const id = Date.now().toString(36).substr(2);

    localStorage.setItem('user', JSON.stringify({ id, email }));
    dispatch({
      type: SIGN_UP,
      payload: {
        id, email
      }
    });
  };
}

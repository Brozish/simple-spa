import { ADD_INVOICE, INCREMENT, DELETE_INVOICE, UPDATE_INVOICE } from 'constants';

export function addInvoice() {
  return (dispatch, getState) => {
    const rand = Math.random().toString(36).slice(2);

    dispatch({
      type: ADD_INVOICE,
      payload: {
        id: getState().id,
        text: rand,
        description: rand,
        price: Math.random()
      }
    });

    dispatch({
      type: INCREMENT
    });
  };
}

export function deleteInvoice(id) {
  return dispatch => {
    dispatch({
      type: DELETE_INVOICE,
      payload: {
        id
      }
    });
  };
}

export function updateInvoice(invoice) {
  return dispatch => {
    dispatch({
      type: UPDATE_INVOICE,
      payload: invoice
    });
  };
}

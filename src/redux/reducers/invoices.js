import { OrderedMap, Record } from 'immutable';

import { ADD_INVOICE, DELETE_INVOICE, UPDATE_INVOICE } from 'constants';

const DefaultStateRecord = Record({
  entities: new OrderedMap({})
});

const InvoiceRecord = Record({
  id: null,
  text: null,
  description: null,
  price: null
});

export default (invoicesState = new DefaultStateRecord(), action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_INVOICE:
      return invoicesState.setIn(['entities', payload.id], new InvoiceRecord(payload));
      break;
    case DELETE_INVOICE:
      return invoicesState.deleteIn(['entities', payload.id]);
      break;
    case UPDATE_INVOICE:
      return invoicesState.updateIn(['entities', payload.id], () => payload);
      break;
    default:
      return invoicesState;
  }
};

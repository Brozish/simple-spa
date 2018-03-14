import { ID, INCREMENT } from 'constants';

export default (id = ID, action) => (action.type === INCREMENT ? id + 1 : id);

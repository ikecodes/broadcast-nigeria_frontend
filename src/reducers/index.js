import { combineReducers } from 'redux';
import items from './items';
import auth from './auth';
import cart from './cart';

export default combineReducers({
  items,
  auth,
  cart,
});

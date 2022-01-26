import {
  ADD_TO_CART,
  FETCH_CARTS,
  DELETE_CART,
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
} from '../constants/actionTypes';

const items = (
  state = {
    carts: [],
  },
  action
) => {
  switch (action.type) {
    case FETCH_CARTS:
      return {
        ...state,
        carts: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    case DELETE_CART:
      return {
        ...state,
        carts: state.carts.filter((cart) => cart._id !== action.payload),
      };
    case INCREASE_PRODUCT:
      return {
        ...state,
        carts: state.carts.map((item) =>
          item._id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
      };
    case DECREASE_PRODUCT:
      return {
        ...state,
        carts: state.carts.map((item) =>
          item._id === action.payload
            ? {
                ...item,
                quantity: item.quantity === 1 ? 1 : item.quantity - 1,
              }
            : item
        ),
      };
    default:
      return state;
  }
};

export default items;

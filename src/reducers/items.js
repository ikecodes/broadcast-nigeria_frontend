import { FETCH_PRODUCTS, ADD_PRODUCT, SET_CAT } from '../constants/actionTypes';

const items = (
  state = {
    products: [],
    cart: [],
    totalPrice: 0,
  },
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case SET_CAT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.category === action.payload
        ),
      };

    default:
      return state;
  }
};

export default items;

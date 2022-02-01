import {
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  SET_CAT,
  LOADING,
} from '../constants/actionTypes';

const items = (
  state = {
    category: null,
    loading: false,
    products: [],
    cart: [],
    totalPrice: 0,
  },
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        category: null,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case SET_CAT:
      return {
        ...state,
        loading: false,
        category: action.payload,
        products: state.products.filter(
          (product) => product.category === action.payload
        ),
      };

    default:
      return state;
  }
};

export default items;

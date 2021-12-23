import { FETCH_PRODUCTS, CLEAR_CART, ADD_TO_CART, GET_TOTAL_PRICE, INCREASE_PRODUCT, DECREASE_PRODUCT } from '../constants/actionTypes';

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
      return { ...state, products: [...state.products, ...action.payload] };
    case CLEAR_CART:
      return { ...state, cart: [] };
    case ADD_TO_CART:
      let newCart = [];
      if (state.cart.includes(state.products.find((Item) => Item.id === action.payload))) {
        newCart = [...state.cart];
      } else {
        newCart = [...state.cart, state.products.find((Item) => Item.id === action.payload)];
      }
      return {
        ...state,
        cart: newCart,
      };
    case GET_TOTAL_PRICE:
      const totalPrice = state.cart.reduce((acc, cur) => {
        acc = acc + cur.price;
        return acc;
      }, 0);
      return {
        ...state,
        totalPrice,
      };
    case INCREASE_PRODUCT:
      const defaultProd = state.products.find((product) => product.id === action.payload.id);
      return {
        ...state,
        cart: state.cart.map((item) => (item.id === action.payload.id ? { ...item, number: item.number + 1, price: action.payload.price + defaultProd.price } : item)),
      };
    case DECREASE_PRODUCT:
      let updatedCart = {};
      const itemProd = state.products.find((product) => product.id === action.payload.id);
      const cartProd = state.cart.find((cartItem) => cartItem.id === action.payload.id);
      if (cartProd.number !== 1 && cartProd.price !== itemProd.price) {
        updatedCart = { ...cartProd, number: cartProd.number - 1, price: cartProd.price - itemProd.price };
      } else {
        updatedCart = { ...cartProd };
      }
      return {
        ...state,
        cart: state.cart.map((cartItem) => (cartItem.id === updatedCart.id ? updatedCart : cartItem)),
      };
    default:
      return state;
  }
};

export default items;

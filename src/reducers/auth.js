import { SIGNUP, LOGIN } from '../constants/actionTypes';

const items = (
  state = {
    user: null,
    token: null,
  },
  action
) => {
  switch (action.type) {
    case SIGNUP:
      return state;
    case LOGIN:
      return state;

    default:
      return state;
  }
};

export default items;

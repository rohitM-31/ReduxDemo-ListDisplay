import { SET_USER_DATA } from "./actions";

const initialState = {
  users: [] 
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;

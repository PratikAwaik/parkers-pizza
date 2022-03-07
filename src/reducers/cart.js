/*
[
  {
    pizza: {}
    quantity: 1
  }
]
*/
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PIZZA": {
      const newState = [...state].concat(action.payload);
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;

const pizzasReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PIZZAS":
      return action.payload;
    default:
      return state;
  }
};

export default pizzasReducer;

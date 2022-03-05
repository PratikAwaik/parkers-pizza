import { combineReducers } from "redux";
import pizzasReducer from "./pizzas";

const reducers = combineReducers({
  pizzas: pizzasReducer,
});

export default reducers;

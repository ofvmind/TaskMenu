import { createStore, combineReducers } from "redux";
import { Basket_Reducer } from "./Basket_Reducer";

const rootReducer = combineReducers({
  purchase: Basket_Reducer     
});

export const store = createStore(rootReducer);
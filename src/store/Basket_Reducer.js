const defaultState = {
  purchase: [],
  totalSum: 0
};

const ADD_PURCHASE = "ADD_PURCHASE";
const DELETE_PURCHASE = "DELETE_PURCHASE";

export const Basket_Reducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_PURCHASE:
      state.totalSum += action.payload.price;
      return {...state, purchase: [...state.purchase, action.payload]};
    case DELETE_PURCHASE:
      state.totalSum -= action.payload.price;
      return {...state, purchase: state.purchase.filter(item => item.num !== action.payload.num)};
    default:
      return state;
  }
};

export const buyAction = payload => ({type: ADD_PURCHASE, payload});
export const cancelBuyAction = payload => ({type: DELETE_PURCHASE, payload});
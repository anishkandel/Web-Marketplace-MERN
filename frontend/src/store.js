import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllNftReducer, addNftReducer, getNftByIdReducer, updateNftByIdReducer} from "./reducers/nftReducer";
import { cartReducer } from "./reducers/cartReducer";
import { registerUserReducer, loginUserReducer,getAllUsersReducer } from "./reducers/userReducer";
import { placeOrderReducer, getUserOrdersReducer,allUserOrdersReducer} from './reducers/orderReducer';

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const rootReducer = combineReducers({
  getAllNftReducer: getAllNftReducer,
  cartReducer:cartReducer,
  registerUserReducer:registerUserReducer,
  loginUserReducer:loginUserReducer,
  placeOrderReducer:placeOrderReducer,
  getUserOrdersReducer:getUserOrdersReducer,
  addNftReducer:addNftReducer,
  updateNftByIdReducer:updateNftByIdReducer,
  getAllUsersReducer:getAllUsersReducer,
  allUserOrdersReducer:allUserOrdersReducer,
  getNftByIdReducer:getNftByIdReducer,
});



const initialState ={
  cartReducer:{
  cartItems:cartItems,
},
  loginUserReducer:{
    currentUser:currentUser,
  },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

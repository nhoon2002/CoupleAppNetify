import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import sampleReducer from "./sampleReducer.js";
import categoryReducer from "./categoryReducer.js";
import missionReducer from "./missionReducer.js";
import couponReducer from "./couponReducer.js";
import productReducer from "./productReducer.js";
import modalReducer from "./modalReducer.js";
import notificationReducer from "./notificationReducer.js";
import sessionReducer from "./sessionReducer.js";
import loginReducer from "./loginReducer.js";
import cartReducer from "./cartReducer.js";

export default combineReducers({
  sampleReducer,
  categoryReducer,
  couponReducer,
  missionReducer,
  productReducer,
  notificationReducer,
  modalReducer,
  sessionReducer,
  loginReducer,
  cartReducer,
  routing: routerReducer
});

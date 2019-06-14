import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionsCreators from "./actions/userActions.js";

import Main from "./containers/Main.jsx";

const mapStateToProps = state => ({
  allData: state,
  loginStatus: state.sessionReducer.loggedin,
  db_currentUser: state.sessionReducer.db_currentUser,
  users: state.sessionReducer.users,
  // db_currentLogin: state.loginReducer.db_accountDetails,
  // loginAccount: state.loginReducer.signinginAccount,
  sample: state.sampleReducer.result,
  fetchedData: state.sampleReducer.fetch,
  axiosData: state.sampleReducer.axios,
  categories: state.categoryReducer.data,
  missions: state.missionReducer.data,
  completed_missions: state.missionReducer.completed_missions,
  mission: state.missionReducer.mission,
  coupons: state.couponReducer.data,
  cart: state.cartReducer.data,
  productlist: state.productReducer.data,
  featuredlist: state.productReducer.featuredData,
  modalStatus: state.modalReducer.status,
  modalType: state.modalReducer.type,
  //Notification
  notificationStatus: state.notificationReducer.show,
  notificationMsg: state.notificationReducer.msg,
  notificationType: state.notificationReducer.type
  // ...state
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionsCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

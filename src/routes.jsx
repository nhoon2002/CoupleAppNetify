import React from "react";
import { Route, Router, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store.js";
import App from "./App.jsx";
import Home from "./containers/Home.jsx";
import Mission from "./containers/Mission.jsx";
import Coupons from "./containers/Coupons.jsx";
import CreateMission from "./containers/CreateMission.jsx";
import EditMyMission from "./containers/EditMyMission.jsx";
import EditMission from "./containers/EditMission.jsx";
import Cart from "./containers/Cart.jsx";

import fire from "./firebase.js"; //Firebase config
import { checkSession } from "./actions/userActions.js";

const handleRoute = (nextState, replace) => {
  console.log("handling route...");
  store.dispatch(checkSession());
};

fire.auth().onAuthStateChanged(firebaseUser => {
  // If user is not logged in yet, prevent them from entering protected routes.
  store.dispatch(checkSession());
  if (firebaseUser) {
    console.log("User: %s", firebaseUser.uid);
  } else {
    console.log("User: %s", null);
  }
});

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="missions" onEnter={handleRoute} component={Mission} />
        <Route path="coupons" onEnter={handleRoute} component={Coupons} />
        <Route
          path="create-mission/uid=:user"
          onEnter={handleRoute}
          component={CreateMission}
        />
        <Route
          path="edit-mission/mid=:id"
          onEnter={handleRoute}
          component={EditMission}
        />
        <Route
          path="edit-my-mission/mid=:mid"
          onEnter={handleRoute}
          component={EditMyMission}
        />
        <Route path="cart" component={Cart} />
      </Route>
    </Router>
  </Provider>
);

export default routes;

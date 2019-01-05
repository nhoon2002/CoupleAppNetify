import React from "react";
import { Route, Router, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store.js";
import App from "./App.jsx";
import Home from "./containers/Home.jsx";
import Category from "./containers/Category.jsx";
import Products from "./containers/Products.jsx";
import ProductDetail from "./containers/ProductDetail.jsx";
import Cart from "./containers/Cart.jsx";
import CreateAccount from "./containers/CreateAccount.jsx";
import Checkout from "./containers/Checkout.jsx";
import fire from "./firebase.js"; //Firebase config
import { checkSession } from "./actions/userActions.js";

fire.auth().onAuthStateChanged(firebaseUser => {
  store.dispatch(checkSession());
  if (firebaseUser) console.log("User: %s", firebaseUser.uid);
  else console.log("User: %s", null);
});

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/missions" component={Category} />
        <Route path="/products" component={Products} />
        <Route path="/detail/:pid" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/checkout" component={Checkout} />
      </Route>
    </Router>
  </Provider>
);

export default routes;

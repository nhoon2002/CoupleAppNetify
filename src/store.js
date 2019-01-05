import { createStore, applyMiddleware, compose } from "redux";

//Connect react router with redux
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import rootReducer from "./reducers/rootReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(rootReducer, composeEnhancers(middleware));
export const history = syncHistoryWithStore(browserHistory, store);
export default store;

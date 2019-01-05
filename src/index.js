import ReactDOM from "react-dom";

//Routes info
import routes from "./routes.jsx";

import "./index.css";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(routes, document.getElementById("root"));
registerServiceWorker();

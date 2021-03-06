import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "./App";

ReactDOM.render(
  <Router>
    <App compiler="TypeScript" framework="React" />
  </Router>,
  document.getElementById("example")
);
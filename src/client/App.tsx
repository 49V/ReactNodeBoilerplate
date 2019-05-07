import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps
} from "react-router-dom";

import { Hey } from "./components/Hey";
import { Hello } from "./components/Hello";


export interface AppProps {
  compiler: string;
  framework: string;
}

function Home() {
  return <h2>Home</h2>;
}

export class App extends React.Component<AppProps, {}> {

  render() {
    return(
      <React.Fragment>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hey">Hey</Link>
            </li>
            <li>
              <Link to="hello">Hello</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/hey" component={Hey} />
        <Route path="/hello" component={Hello} />
      </React.Fragment>
    );
  }

}
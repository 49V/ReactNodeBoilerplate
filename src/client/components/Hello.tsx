import * as React from "react";
import { string } from "prop-types";
import axios from "axios";

export interface HelloProps { 
  compiler: string; 
  framework: string; 
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
  state = { username: string };

  componentDidMount() {
    axios.get('/api/getUsername')
      .then(response => response)
      .then(response => this.setState({ username: response.data.username }));
  }

    render() {
        return (
        <h1>Hello {this.state.username}!</h1>
        );
    }
}
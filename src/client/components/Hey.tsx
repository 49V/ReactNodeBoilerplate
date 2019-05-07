import * as React from "react";
import { string } from "prop-types";
import axios from "axios";

export interface HeyProps { 
  compiler: string;
  framework: string;
}

export interface HeyState {
  username: string;
}

export class Hey extends React.Component<HeyProps, HeyState> {
  componentDidMount() {
  axios.get('/api/getUsername')
    .then(response => this.setState({username: response.data.username}));
  }

  render() {
    return(
      <h1>Hey</h1>
    );
  }
}
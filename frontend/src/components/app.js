import React, { Component } from 'react';
import { render } from "react-dom";
import People from "./people";


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <People></People>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
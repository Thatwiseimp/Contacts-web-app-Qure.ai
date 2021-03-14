import React, { Component } from 'react';
import { render } from "react-dom";
import Home from "./home";
import PropTypes from 'prop-types'


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className= "center">
        rfty
        <Home></Home>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);

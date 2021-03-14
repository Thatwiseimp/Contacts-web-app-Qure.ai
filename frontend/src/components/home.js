import React, { Component } from "react";
import List from "./list";
import People from "./people";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <p>This is the home page</p>
          </Route>
          <Route path="/list" component={List}></Route>
          <Route path="/people" component={People}></Route>
        </Switch>
      </Router>
    );
  }
}

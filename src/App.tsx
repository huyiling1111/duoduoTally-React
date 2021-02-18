import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import Tags from "./views/Tags";
import NoMatch from "./views/NoMatch";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail">
          <Money />
        </Route>
        <Route path="/chart">
          <Tags />
        </Route>
        <Route path="/money">
          <Statistics />
        </Route>
        <Route exact from="/">
          <Redirect to="/detail" />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

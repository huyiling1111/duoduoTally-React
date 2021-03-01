import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Money from "views/Money";
import Statistics from "views/Statistics";
import Chart from "views/Chart";
import NoMatch from "views/NoMatch";
// import {Tag} from "./views/tag";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/money" exact>
          <Money />
        </Route>

        <Route path="/chart" exact>
          <Chart />
        </Route>
        {/*<Route path="/tags/:id" exact>*/}
        {/*  <Tag />*/}
        {/*</Route>*/}
        <Route path="/detail" exact>
          <Statistics />
        </Route>
        <Route exact from="/">
          <Redirect to="/money" />
        </Route>
        <Route path="*" exact>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Money from "views/Money";
import Statistics from "views/Statistics";
import Tags from "views/Tags";
import NoMatch from "views/NoMatch";
import {Tag} from "./views/tag";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail" exact>
          <Money />
        </Route>
        <Route path="/tags" exact>
          <Tags />
        </Route>

        <Route path="/tags/:id" exact>
          <Tag />
        </Route>
        <Route path="/money" exact>
          <Statistics />
        </Route>
        <Route exact from="/">
          <Redirect to="/detail" />
        </Route>
        <Route path="*" exact>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

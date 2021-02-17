import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from "components/Layout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="/chart">
          <Chart />
        </Route>
        <Route path="/money">
          <Money />
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
function Detail() {
  return (
    <Layout>
      <h2>明细</h2>
    </Layout>
  );
}

function Chart() {
  return (
    <Layout>
      <h2>图表</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账</h2>
    </Layout>
  );
}
function NoMatch() {
  return (
    <Layout>
      <h3>找不到</h3>
    </Layout>
  );
}

export default App;

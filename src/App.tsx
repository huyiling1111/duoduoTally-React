import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import Nav from "components/Nav";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav />
      </Wrapper>
    </Router>
  );
}
function Detail() {
  return <h2>明细</h2>;
}

function Chart() {
  return <h2>图表</h2>;
}

function Money() {
  return <h2>记账</h2>;
}
function NoMatch() {
  return (
    <div>
      <h3>找不到</h3>
    </div>
  );
}

export default App;

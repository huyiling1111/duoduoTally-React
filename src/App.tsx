import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;
const Nav = styled.div`
  > ul {
    display: flex;
    > li {
      width: 33.3%;
      text-align: center;
      padding: 16px;
    }
  }
`;
function App() {
  return (
    <Router>
      <Wrapper>
        <Nav>
          <ul>
            <li>
              <Link to="/detail">detail</Link>
            </li>
            <li>
              <Link to="/chart">chart</Link>
            </li>
            <li>
              <Link to="/money">money</Link>
            </li>
          </ul>
        </Nav>
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

import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
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
        </nav>

        <Switch>
          <Route path="/detail">
            <Home />
          </Route>
          <Route path="/chart">
            <About />
          </Route>
          <Route path="/money">
            <Users />
          </Route>
          <Route exact from="/">
            <Redirect to="/detail" />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
function NoMatch() {
  return (
    <div>
      <h3>找不到</h3>
    </div>
  );
}

export default App;

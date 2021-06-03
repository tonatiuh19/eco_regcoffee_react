import React from "react";
import logo from "./logo.svg";
import Layout from "./shared/Layout/Layout";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Start from "./components/Main/start";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/:user?" component={Start} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;

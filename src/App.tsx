import React from "react";
import logo from "./logo.svg";
import Layout from "./shared/Layout/Layout";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Start from "./components/Main/start";
import Extras from "./components/FanPage/Extras";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/:user?" component={Start} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

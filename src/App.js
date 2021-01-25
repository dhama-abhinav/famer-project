import React from "react";
import "./App.css";
import { Sidebar } from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="app__body">
          <Switch>
            <Route path="/hi">
              <h2>hi</h2>
            </Route>
            <Route path="/hello">
              <h2>hello</h2>
            </Route>
            <Route path="/bye">
              <h2> bye</h2>
            </Route>
            <Route path="/">
              <h2>home</h2>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

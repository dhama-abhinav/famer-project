import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";

function App() {
  return (

    <Router>
      <div className="app">
        <Navbar />
       
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
    </Router>

    // <Router>
    //   <div className="app">
    //     <Header />

    //     <div className="app__body">
    //       <Sidebar />
    //       <Switch>
    //         <Route path="/hi">
    //           <h2>hi</h2>
    //         </Route>
    //         <Route path="/hello">
    //           <h2>hello</h2>
    //         </Route>
    //         <Route path="/bye">
    //           <h2> bye</h2>
    //         </Route>
    //         <Route path="/">
    //           <h2>home</h2>
    //         </Route>
    //       </Switch>
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;

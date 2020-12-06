import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../src/style.css";
import Signup from "./component/Signup";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "./component/Signin";
import Dashboard from "./component/Dashboard";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <>
      <BrowserRouter>{isLoggedIn ? <Private setisLoggedIn={setisLoggedIn}/> : <Public />}</BrowserRouter>
      <Dashboard />
    </>
  );
}

function Public() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Signup} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />

      </Switch>
    </>
  );
}
function Private(props) {
  console.log(props);
  props.setisLoggedIn(true);
  return (
    <>
      <Switch>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function NotFound() {
  return (
    <>
    <h1>404 not found</h1>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

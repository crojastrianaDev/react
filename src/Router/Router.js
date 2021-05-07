import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../containers/HOME/Home";
import Login from "../containers/Login/Login";
import Registro from "../containers/registro/Registro";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/registro">
          <Registro />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;

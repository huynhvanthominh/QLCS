import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import IndexAdmin from "./admin";
import "./index.css"

const Index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="Admin" />
        </Route>
        <Route path="/Admin">
          <IndexAdmin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Index;

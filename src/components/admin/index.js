import { Redirect, Route, Switch } from "react-router-dom";
import NotFoundPage from "../error/not-found-page";
import LayoutAdmin from "../layouts/admin/layout-admin";
import MaterialTypeAdd from "./material-type/material-type-add";
import MaterialTypeList from "./material-type/material-type-list";
import MaterialAdd from "./material/material-add";
import MaterialList from "./material/material-list";

const IndexAdmin = () => {
  return (
    <LayoutAdmin>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Admin/Material" />
        </Route>
        <Route path="/Admin/Material-Type/Add">
          <MaterialTypeAdd />
        </Route>
        <Route path="/Admin/Material-Type">
          <MaterialTypeList />
        </Route>
        <Route path="/Admin/Material">
          <MaterialList />
        </Route>
        <Route path="/Admin/MaterialAdd">
          <MaterialAdd />
        </Route>
        <Route exact path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </LayoutAdmin>
  );
};

export default IndexAdmin;

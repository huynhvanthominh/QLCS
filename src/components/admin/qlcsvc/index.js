import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import AddMaterialType from "./add-material-type/add-material-type";
import ListMaterialType from "./list-material-type/list-material-type";

const IndexQLCSVC = () => {
  const { path, url } = useRouteMatch();
  console.log("index QLCSVC");
  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={`${path}/List-material-type`} />
      </Route>
      <Route path={`${path}/List-material-type`}>
        <ListMaterialType />
      </Route>
      <Route path={`${path}/Add-material-type`}>
        <AddMaterialType />
      </Route>
    </Switch>
  );
};

export default IndexQLCSVC;

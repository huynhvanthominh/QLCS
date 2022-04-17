import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import AddMaterialType from "./add-material-type/add-material-type";
import ListMaterialType from "./list-material-type/list-material-type";

const IndexQLCSVC = () => {
  const { path, url } = useRouteMatch();
  const materialType = path + "/Material-Type";
  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={materialType} />
      </Route>
      <Route path={`${path}/Material-Type`}>
        <ListMaterialType />
      </Route>
      <Route path={`${path}/Material`}>
        <AddMaterialType />
      </Route>
    </Switch>
  );
};

export default IndexQLCSVC;

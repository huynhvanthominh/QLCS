import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import LayoutAdmin from "../layouts/admin/layout-admin";
import IndexQLCSVC from "./qlcsvc";
import IndexQLKTX from "./qlktx";

const IndexAdmin = () => {
  const { path, url } = useRouteMatch();
  return (
    <>
      <LayoutAdmin>
        <Switch>
          <Route exact path={path}>
            <Redirect to={`${path}/QLCSVC`} />
          </Route>
          <Route path={`${path}/QLCSVC`}>
            <IndexQLCSVC />
          </Route>
          <Route path={`${path}/QLKTX`}>
            <IndexQLKTX />
          </Route>
        </Switch>
      </LayoutAdmin>
    </>
  );
};

export default IndexAdmin;

import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom"
import AddMaterialType from "./add-material-type/add-material-type"
import ListMaterialType from "./list-material-type/list-material-type"

const IndexQLCSVC = () => {
    const {path, url} = useRouteMatch()
    return (
        <>
        <Switch>
            <Route exact path={path}>
                <Redirect to={`${url}/List-material-type`}/>
            </Route>
            <Route path={`${url}/List-material-type`}>
                <ListMaterialType/>
            </Route>
            <Route path={`${url}/Add-material-type`}>
                <AddMaterialType/>
            </Route>
        </Switch>
        </>
    )
}

export default IndexQLCSVC
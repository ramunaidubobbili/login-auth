import { Switch, Route } from "react-router-dom";
import ListItem from "./ListItem";
import NewItem from "./NewItem";
import PageNotFound from "./PageNotFound";
import { withRouter } from "react-router";

function Master({ match }) {
  return (
    <>
      <h1>Master Item</h1>
      <Switch>
        <Route path={match.path + "/new"}>
          <NewItem />
        </Route>
        <Route exact path={match.path}>
          <ListItem />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default withRouter(Master);

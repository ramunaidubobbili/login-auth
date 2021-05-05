import { useState } from "react";
import { Redirect, Link, Switch, Route } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { withRouter } from "react-router";

import Master from "./Master";
import Pos from "./Pos";
import IndexDashboard from "./IndexDashboard";
import PageNotFound from "./PageNotFound";

function Dashboard({ match }) {
  const [isLogout, setIsLogout] = useState(false);

  const signout = () => {
    localStorage.removeItem("token");
    setIsLogout(true);
  };

  if (isLogout) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Link to={match.path}>Dashboard</Link>
      <Link to={match.path + "/master"}>Master</Link>
      <Link to={match.path + "/pos"}>Pos</Link>
      <Button onClick={signout}>Sign Out</Button>
      <Grid container>
        <Grid item>
          <Switch>
            <Route path={match.path + "/master"}>
              <Master />
            </Route>
            <Route path={match.path + "/pos"}>
              <Pos />
            </Route>
            <Route exact path={match.path}>
              <IndexDashboard />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </>
  );
}

export default withRouter(Dashboard);

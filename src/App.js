import { Container, CssBaseline } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Container component="main">
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectedRoute path="/dashboard">
            <Dashboard />
          </ProtectedRoute>
          <Route exact path="/">
            <Redirect exact from="/" to="dashboard" />
          </Route>
          <Route path="*">
            <Redirect from="/" to="dashboard" />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

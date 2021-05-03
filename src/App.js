import { Container, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import useToken from "./components/useToken";

export default function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <Container component="main">
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          {/* <Route path="" component={Login} /> */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/prefrences" component={Preferences} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

import { Grid, Typography, Avatar, TextField, Button } from "@material-ui/core";
import { Lock } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";
import { useState } from "react";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500]
  },
  submit: {
    margin: theme.spacing(2, 0, 0)
  }
}));

export default function Login() {
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState("");
  const [UserPassword, setPassword] = useState("");

  const classes = useStyles();

  const login = (event) => {
    let user_id = userId;
    let password = UserPassword;

    if (user_id === "admin" && password === "123") {
      localStorage.setItem("token", "T");
      setIsLogged(!isLogged);
    }
    event.preventDefault();
  };

  if (localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={6} md={4}>
        <Grid container justify="center">
          <Avatar className={classes.pink}>
            <Lock />
          </Avatar>
        </Grid>
        <Grid container justify="center">
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form noValidate autoComplete="off" onSubmit={login}>
            <TextField
              type="email"
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              required
              margin="normal"
              fullWidth
              onChange={(e) => setUserId(e.target.value)}
            />
            <TextField
              type="password"
              id="password"
              label="Password"
              variant="outlined"
              size="small"
              required
              margin="normal"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}

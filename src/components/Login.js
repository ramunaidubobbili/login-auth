import { Grid, Typography, Avatar, TextField, Button } from "@material-ui/core";
import { Lock } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";
import PropTypes from "prop-types";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500]
  },
  submit: {
    margin: theme.spacing(2, 0, 0)
  }
}));

async function loginUser(credentials) {
  return fetch("https://ivzj3.csb.app/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      userName,
      password
    });
    debugger;
    setToken(token);
  };

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
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              type="email"
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              required
              margin="normal"
              fullWidth
              onChange={(e) => setUserName(e.target.value)}
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

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
  const [userPassword, setPassword] = useState("");
  const [errors, setErrors] = useState({ emailError: "", passwordError: "" });

  const classes = useStyles();
  const handleOnBlur = (event) => {
    let errors = {};
    if (!userId) {
      errors.emailError = "Required";
    } else if (!/\S+@\S+\.\S+/.test(userId)) {
      errors.emailError = "Invalid email address";
    }

    const passwordRegex = /(?=.*[0-9])/;
    if (!userPassword) {
      errors.passwordError = "Required";
    } else if ((userPassword.length > 4) | (userPassword.length < 4)) {
      errors.passwordError = "Password must be 4 characters.";
    } else if (!passwordRegex.test(userPassword)) {
      errors.passwordError = "Invalida password. Must contain one number";
    }
    setErrors(errors);
    console.log(JSON.stringify(errors));
  };
  const login = (event) => {
    let user_id = userId;
    let password = userPassword;

    if (user_id === "ram@gmail.com" && password === "ram9") {
      localStorage.setItem("token", "T");
      setIsLogged(!isLogged);
    } else {
      let errors = {};
      if (!user_id) {
        errors.emailError = "Required";
      } else if (!/\S+@\S+\.\S+/.test(user_id)) {
        errors.emailError = "Invalid email address";
      }

      const passwordRegex = /(?=.*[0-9])/;
      if (!password) {
        errors.passwordError = "Required";
      } else if ((password.length > 4) | (password.length < 4)) {
        errors.passwordError = "Password must be 4 characters.";
      } else if (!passwordRegex.test(password)) {
        errors.passwordError = "Invalida password. Must contain one number";
      }
      setErrors(errors);
      console.log(JSON.stringify(errors));
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
              error={errors && errors.emailError}
              helperText={errors && errors.emailError}
              onChange={(e) => setUserId(e.target.value)}
              onBlur={handleOnBlur}
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
              error={errors && errors.passwordError}
              helperText={errors && errors.passwordError}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handleOnBlur}
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

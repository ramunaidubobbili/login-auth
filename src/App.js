import {
  Container,
  Grid,
  Typography,
  CssBaseline,
  Avatar,
  TextField,
  Button
} from "@material-ui/core";
import { Lock } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500]
  },
  submit: {
    margin: theme.spacing(2, 0, 0)
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <Container component="main">
      <CssBaseline />
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
            <form noValidate autoComplete="off">
              <TextField
                type="email"
                id="email"
                label="Email"
                variant="outlined"
                size="small"
                required
                margin="normal"
                fullWidth
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
    </Container>
  );
}

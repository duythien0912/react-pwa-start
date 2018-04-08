import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  rootDesktop: {
    flexGrow: 1
  },
  buttonCreate: {
    border: "1px solid tomato",
    background: "tomato",
    padding: "0",
    color: "#fff",
    minHeight: "2em"
  }
};

function Navbar(props) {
  const { classes } = props;
  return (
    <div>
      <div className="navRootDesktop">
        <div className={classes.rootDesktop}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Logo
              </Typography>

              <Button color="inherit">Log in</Button>
              <Button color="inherit">Sign up</Button>
              <Button className={classes.buttonCreate}>Create</Button>
            </Toolbar>
          </AppBar>
        </div>
      </div>
      <div className="navRootMobi">
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Title
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
